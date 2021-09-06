import { Button } from "@material-ui/core";

type Props = {
    fullWidth: boolean,
    label: string,
    onClick: () => void,
}

const NegativeButton = (props: Props) => {
    return(
        <Button fullWidth={props.fullWidth} variant="contained" onClick={props.onClick} color='secondary'>
            {props.label}
        </Button>
    )
}

export default NegativeButton;