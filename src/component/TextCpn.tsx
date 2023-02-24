import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
type Props = {
  title: string;
  color?: any;
  size?: any;
  weight: any;
  mb?: any;
  mt?: any;
  fontFml?: any;
};

const TextComponent = (props: Props) => {
  const { i18n } = useTranslation();
 const text =i18n.t(`${props.title}`)

  return (
    <View style={{marginBottom: props.mb, marginTop: props.mt}}>
      <Text
        style={{
          fontSize: props.size,
          color: props.color,
          fontWeight: props.weight,
          textAlign: 'center',
          fontFamily: `${!props.fontFml ? 'Inter-Medium' : props.fontFml}`,
        }}>
        {/* {t(`${props.title}`)} */}
        {text}
      </Text>
    </View>
  );
};

export default TextComponent;
