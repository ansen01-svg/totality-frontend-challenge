import BasicInfo from "./basic_info";
import UserInfo from "./user_info";
import CardDetails from "./card_info";
import ButtonHolder from "./button_holder";

export default function InfoFormSection(props) {
  const { user, card, handleUserChange, handleCardChange, handleSubmit } =
    props;

  return (
    <div className="w-full lg:flex-1">
      <form
        className="w-full flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit}
      >
        <BasicInfo />
        <UserInfo user={user} handleUserChange={handleUserChange} />
        <CardDetails card={card} handleCardChange={handleCardChange} />
        <ButtonHolder />
      </form>
    </div>
  );
}
