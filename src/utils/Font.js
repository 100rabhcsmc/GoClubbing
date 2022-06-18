import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const guidelineBaseWidth = 360;

const Scale = size => (width / guidelineBaseWidth) * size;

export default Scale;
