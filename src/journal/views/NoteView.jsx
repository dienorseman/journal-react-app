// Redux
import { useDispatch, useSelector } from "react-redux";

// Hooks
import { useForm } from "../../hooks/useForm";

// MUI
import {
  DeleteOutline,
  SaveOutlined,
  UploadFileOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../organisms";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingfiles } from "../../store/journal/thunks";

// SweetAlert
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const NoteView = () => {
  const dispatch = useDispatch();

  const { active, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  );

  const { body, title, date, onInputChange, values } = useForm(active);

  const dateString = useMemo(() => {
    return new Date(date).toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(values));
  }, [values]);

  useEffect(() => {
    // console.log(messageSaved);
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "Saved",
        text: messageSaved,
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  }, [messageSaved]);

  const onFileChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingfiles(target.files));
  };

  const fileInputRef = useRef();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mb: 1,
      }}
    >
      <Grid item>
        <Typography
          variant="h5"
          fontWeight={"light"}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
            },
          }}
        >
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileChange}
          style={{
            display: "none",
          }}
        />

        <IconButton
          disabled={isSaving}
          color="primary"
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          onClick={() => dispatch(startSaveNote(active))}
          disabled={isSaving}
          variant="contained"
        >
          <SaveOutlined
            sx={{
              mr: 1,
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "2rem",
              },
            }}
          />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          fullWidth
          variant="filled"
          placeholder="Some awesome title"
          label="Title"
          name="title"
          sx={{
            border: "none",
            mt: 4,
            textAlign: "center",
          }}
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          fullWidth
          multiline
          placeholder="What happened today?"
          value={body}
          label="Body"
          name="body"
          onChange={onInputChange}
          minRows={5}
          sx={{
            border: "none",
            mt: 4,
            textAlign: "center",
          }}
        />
      </Grid>        
      <DeleteOutline 
        onClick={() => dispatch( startDeletingNote( active.id ))}
            sx={{
                fontSize: {
                    xs: '2rem', sm: '1rem', md: '4rem'
                },
                color: 'error.main',
                cursor: 'pointer',
                mt: 2,
            }}
        />
      <ImageGallery />

    </Grid>
  );
};
