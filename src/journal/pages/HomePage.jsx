
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { Add, AddCircleOutlineOutlined } from "@mui/icons-material";


export const HomePage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView  />
      {/* <NoteView /> */}
      <IconButton
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
