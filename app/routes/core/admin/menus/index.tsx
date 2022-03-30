import { Form } from "remix";
import { Button } from "~/components/button";
import { Input } from "~/components/input";

function Menus() {
  return (
    <div>
      <div className="bg-theme-mute m-auto my-5 h-fit w-fit rounded-[4px] border border-theme-base px-7 py-8 text-center shadow-md">
        <h1 className="text-left text-2xl font-semibold text-theme-base">Menu Editor</h1>
        <Form method="post" className="mt-10">
          <Input
            label="Menu Role"
            className="w-full"
            name="menurole"
            autoComplete="off"
            inputData={["public", "private"]}
          />
          <Input
            label="Menu Type"
            className="w-full"
            name="menutype"
            autoComplete="off"
            inputData={["menu", "url"]}
          />
          <Input
            label="Parent"
            className="w-full"
            name="parent"
            autoComplete="off"
            inputData={["public", "private"]}
          />
          <Input label="Title" className="w-full" name="title" autoComplete="off" />
          <Input label="Icon" className="w-full" name="Icon" autoComplete="off" />
          <Input label="Path" className="w-full" name="path" autoComplete="off" />
          <Input
            label="Url type"
            className="w-full"
            name="pathtype"
            autoComplete="off"
            inputData={["internal", "External"]}
          />
          <Input
            label="Status"
            className="w-full"
            name="status"
            autoComplete="off"
            inputData={["active", "inactive"]}
          />
          <Button label="Submit" className="w-auto" />
        </Form>
      </div>
    </div>
  );
}

export default Menus;
