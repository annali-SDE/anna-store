interface ImageUploadProps {
	value: string[];
	onChange: (value: string) => void;
	onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
	value,
	onChange,
	onRemove
}) => {
	return <div>ImageUpload</div>;
};
export default ImageUpload;
