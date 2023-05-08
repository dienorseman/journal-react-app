import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialState = {}, formValidations = {} ) => {

    const [values, setValues] = useState(initialState);
    const [formValiadion, setFormValidation] = useState( {} );

    useEffect(() => {
        createValidators();
    }, [ values ]);

    useEffect(() => {
        setValues( initialState );
    }, [initialState]);

    const isFormValid = useMemo( () => {
        for (const value of Object.keys( formValidations )) {
            if ( formValiadion[`${value}Valid`] !== null ) return false;
        }
        return true;
    }, [formValiadion] )

    const reset = () => {
        setValues( initialState );
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [fn, errorMessage = 'This field is required.'] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn( values[formField] ) ? null : errorMessage;
        }
        setFormValidation( formCheckedValues );    
    }

    return {
        ...values,
        values,
        reset,
        onInputChange,
        isFormValid,
        ...formValiadion,
    }
}