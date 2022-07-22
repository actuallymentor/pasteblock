import React from "react";
import { Text } from "./Text";

const Highlighted = ({ text = "", highlight = "" }) => {
	if (!highlight.trim()) {
		return <Text>{text}</Text>;
	}
	const regex = new RegExp(`(${highlight})`, "gi");
	const parts = text.split(regex);

	return (
		<span>
			{parts.filter(String).map((part, i) => {
				return regex.test(part) ? (
				<mark key={i}>{part}</mark>
				) : (
				<span key={i}>{part}</span>
				);
			})}
		</span>
	);
};

export default ( { text, highlight, ...props } ) => <Highlighted
text={ text }
highlight={ highlight }
/>