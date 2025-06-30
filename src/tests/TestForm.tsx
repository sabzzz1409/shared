import BasicReactForm from "./BasicReactForm";
import Formiks from "./Formiks";
import ReactHookForm from "./ReactHookForm";

export default () => {

    const formElementList: string[] = [
        "Form Structure",
        "Basic Text Input",
        "Basic Number Input",
        "Text Area",
        "Static Selection",
        "Multiple Selection",
        "Dynamic Selection",
        "Button",
        "Radio Button",
        "Checkbox",
        "Slider",
        "Ranger",
        "Color",
        "Single File",
        "Multiple File",
        "Date",
        "Time",
        "Date-Time"
    ];

    return (
        <>
            <h1 className="text-xl font-bold">List of all Form elements</h1>

            <ul>
                {formElementList.map((item: string, index: number) => (
                    <li key={item} className="pl-4">{`${index + 1}. ${item}`}
                    </li>
                ))}
            </ul>

            <BasicReactForm />
            <ReactHookForm />
            <Formiks />
        </>
    )

}