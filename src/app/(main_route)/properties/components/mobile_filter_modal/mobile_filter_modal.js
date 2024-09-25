import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ModalHeader from "./modal_header";
import ModalBody from "./modal_body/modal_body";

export default function FilterModal(props) {
  const {
    showFilterModal,
    setShowFilterModal,
    handleFilterChange,
    clearFilters,
    filters,
    disableClearBtn,
    properties,
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={showFilterModal}
      onClose={() => setShowFilterModal(false)}
      aria-labelledby="responsive-dialog-title"
      sx={{
        ".MuiDialogContent-root": {
          padding: 0,
          width: "100%",
          minWidth: "500px",
        },
      }}
    >
      <DialogContent>
        <ModalHeader
          setShowFilterModal={setShowFilterModal}
          clearFilters={clearFilters}
          disableClearBtn={disableClearBtn}
        />
        <ModalBody
          filters={filters}
          setShowFilterModal={setShowFilterModal}
          handleFilterChange={handleFilterChange}
          properties={properties}
        />
      </DialogContent>
    </Dialog>
  );
}
