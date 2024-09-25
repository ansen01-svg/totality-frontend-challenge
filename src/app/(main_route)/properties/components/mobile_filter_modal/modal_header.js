import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function ModalHeader(props) {
  const { setShowFilterModal, clearFilters, disableClearBtn } = props;

  return (
    <div className="w-full h-12 px-4 bg-white border-b-[1px] border-slate-200 flex flex-row items-center justify-between sticky top-0 left-0 z-50">
      <CloseButtonAndTitleHolder setShowFilterModal={setShowFilterModal} />
      <ClearButtonHolder
        handleClick={clearFilters}
        disbaled={disableClearBtn}
      />
    </div>
  );
}

function CloseButtonAndTitleHolder({ setShowFilterModal }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button onClick={() => setShowFilterModal(false)}>
        <CloseOutlinedIcon fontSize="medium" />
      </button>
      <h1 className="font-medium text-[15px]">Filter</h1>
    </div>
  );
}

function ClearButtonHolder({ handleClick, disbaled }) {
  return (
    <div>
      <button
        className="font-medium text-[14px] text-blue disabled:text-gray2"
        disabled={disbaled}
        onClick={handleClick}
      >
        Clear
      </button>
    </div>
  );
}
