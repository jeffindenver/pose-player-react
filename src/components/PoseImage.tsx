import defaultImage from "../assets/default.jpg";

interface Props {
    imgURL: string;
}

export const PoseImage = ({ imgURL }: Props) => {

    function getSource() {
        let source: string;
        if (!imgURL) {
            source = defaultImage;
        } else {
            source = imgURL;
        }
        return source;
    }

    return (
        <div>
            <img src={getSource()} alt="pose" />
        </div>
    )

}