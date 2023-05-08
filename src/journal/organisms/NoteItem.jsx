import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const NoteItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      disablePadding
      onClick={() => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot variant="" />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
