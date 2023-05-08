
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { Add, AddCircleOutlineOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export const HomePage = () => {

  const dispatch = useDispatch();    
  const { isSaving, active } = useSelector(state => state.journal );

  useEffect(() => {
    // console.log(active);
  }, [])

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <NothingSelectedView  /> */}
      {/* <NoteView /> */}

       {( !!active  ) ? <NoteView /> : <NothingSelectedView  />}

      <IconButton
        onClick={handleAddNew}
        disabled={isSaving}
        sx={{
          backgroundColor: "error.main",
          color: "white",
          position: "absolute",
          bottom: 20,
          right: 20,
          margin: 2,
          "&:hover": {
            backgroundColor: "white",
            color: "error.main",
            opacity: 0.8,
          },
        }}
      >
         <Add 
            sx={{
                fontSize: { xs: '2rem', sm: '1rem', md: '4rem' },
            }}  
         />
      </IconButton>
    </JournalLayout>
  );
};
