import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { IconSize } from '../constants/Theme';
export const Icons = {
    Ionicons,
    FontAwesome,
    FontAwesome6,
    MaterialIcons,
}

interface IconProps {
	type: Function;
	name: string;
	color?: string;
	size?: number;
	style?: object;
}

const Icon = ({ type, name, color, size, style }: IconProps) => {
	const fontSize = IconSize;
	const Tag = type;
	if (type) {
		return <Tag name={name} size={size || fontSize} color={color} style={style} />
	}
	return null;
}

export default Icon