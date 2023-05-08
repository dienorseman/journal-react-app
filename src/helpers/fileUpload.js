export const fileUpload = async ( file ) => {

    if ( !file ) throw new Error('No file to upload')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dbtwatl75/upload'

    const formdata = new FormData()

    formdata.append('upload_preset','react-journal')
    formdata.append('file', file )

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formdata
        })

        if (!resp.ok) throw new Error('Image couldnt be uploaded')

        const cloudResp = await resp.json()

        return cloudResp 
        
    } catch ( err ) {
        throw new Error( err.message )
    }
}