import { TextField } from "@material-ui/core";

type Props = {
    label: string,
    autoFocus: boolean,
    error: boolean,
    fullWidth: boolean,
    multiline: boolean,
    required: boolean,
    type: string,
}

const TextInput = (props: Props) => {
    return (
        <TextField label={props.label} autoFocus={props.autoFocus} error={props.error} fullWidth={props.fullWidth}
        multiline={props.multiline} required={props.required} type={props.type} />
    )
}

export default TextInput;