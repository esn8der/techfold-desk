import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WaitListDialog = () => {
  const [isDialogOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
    enqueueSnackbar("Mensaje Enviado!", { variant: "success" });
  };

  return (
    <div>
      <button
        className="group relative overflow-clip inline-flex w-fit mt-10 items-center justify-center h-10 px-7 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
        onClick={handleOpen}
      >
        <BiRightArrowAlt className="absolute mr-2 text-xl -translate-x-24 group-hover:-translate-x-14 transition-all duration-300 ease-in scale-50 group-hover:scale-100" />
        <span className="-translate-x-3 group-hover:translate-x-4 transition-transform duration-300 ease-in">
          Lista de espera
        </span>
        <BiRightArrowAlt className="absolute ml-2 text-xl translate-x-14 group-hover:translate-x-24 group-hover:scale-50 transition-all duration-300 ease-in" />
      </button>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={"xs"}
      >
        <DialogTitle>Unirse a la lista de espera</DialogTitle>
        <DialogContent className="flex flex-col gap-4">
          <DialogContentText>
            Por favor, completa el formulario.
          </DialogContentText>
          <form>
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
              label="¿Por qué quieres un TechFold Desk?"
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
          <Button onClick={handleClose}>Cerrar</Button>
          <Button
            onClick={handleSubmit}
            className="bg-gradient-to-l from-gradient-primary to-[#00d68f]"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { WaitListDialog };
