import { Button } from "..";

export const Discount = ({ discount }) => {
  return (
    <div className="discount">
      <Button text={`${discount}%`} className="primary sm un-hover" />
    </div>
  );
};
