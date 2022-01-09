interface Props {
    imgURL: string;
}

export const PoseImage = ({ imgURL }: Props) => {

    return (
        <div>
            <img src={imgURL} alt="pose" />
        </div>
    )

}