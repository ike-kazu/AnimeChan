import { Button } from "@material-ui/core";

type Props = {
    fullWidth: boolean,
    label: string,
    onClick: () => void,
}

const PrimaryButton = (props: Props) => {
    return(
        <Button fullWidth={props.fullWidth} variant="contained" onClick={props.onClick} color='primary'>
            {props.label}
        </Button>
    )
}

export default PrimaryButton;