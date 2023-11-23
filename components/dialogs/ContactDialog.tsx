import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { enqueueSnackbar } from "notistack";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactDialog = ({ open, onClose }: ContactDialogProps) => {
  const handleSubmit = () => {
    onClose();
    enqueueSnackbar("Mensaje Enviado!", { variant: "success" });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      maxWidth={"xs"}
    >
      <DialogTitle>Contacto</DialogTitle>
      <DialogContent>
        {/* Contenido del diálogo */}
        <form className="">
          <TextField
            fullWidth
            label="Nombre"
            name="name"
            type="text"
            autoComplete="email"
            variant="filled"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            variant="filled"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="message"
            multiline
            rows={4}
            variant="filled"
            margin="normal"
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="w-fit"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ContactDialog };
