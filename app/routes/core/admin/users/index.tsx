import { Button } from "~/components/button";
import { Input } from "~/components/input";

function User() {
  return (
    <div>
      <div className="relative m-auto my-10 h-auto w-96 flex-row items-center justify-center rounded-md border border-theme-base shadow-md">
        <Input label="Email" className="w-full" />
        <Input label="Status" className="w-full" />
        <Input label="User Email" className="w-full" />
        <Button label="save" className="w-16" />
      </div>
    </div>
  );
}

export default User;
