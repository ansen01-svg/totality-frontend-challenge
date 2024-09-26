import FieldHolder from "./field_holder";

export default function CardDetails({ card, handleCardChange }) {
  const headerTitle = `Card Details`;

  return (
    <div className="w-full px-5 py-5 rounded-md border-[1px] border-slate-200 flex flex-col items-center justify-center gap-5 shadow-sm">
      <Header headerTitle={headerTitle} />
      <div className="w-full flex flex-col items-start justify-center gap-4">
        <FieldHolder
          labelTitle="Card Number"
          labelFor="number"
          value={card.number}
          type={"number"}
          placeholder={"Card Number"}
          handleChange={handleCardChange}
        />
        <FieldHolder
          labelTitle="Name on Card"
          labelFor="name"
          value={card.name}
          type={"text"}
          placeholder={"Name on Card"}
          handleChange={handleCardChange}
        />
        <div className="w-full flex items-center justify-center gap-2">
          <div className="flex-1">
            <FieldHolder
              labelTitle="Expiry"
              labelFor="expiry"
              value={card.expiry}
              type={"number"}
              placeholder={"Valid thru (MM/YY)"}
              handleChange={handleCardChange}
            />
          </div>
          <div className="w-[40%]">
            <FieldHolder
              labelTitle="CVV"
              labelFor="cvv"
              value={card.cvv}
              type={"number"}
              placeholder={"CVV"}
              handleChange={handleCardChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header({ headerTitle }) {
  return (
    <div className="w-full text-left">
      <h1 className="text-[14px] text-black font-semibold lg:text-[13px]">
        {headerTitle}
      </h1>
    </div>
  );
}
