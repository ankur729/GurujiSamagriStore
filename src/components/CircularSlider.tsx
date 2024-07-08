import {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {DEVICE_WIDTH} from '../helpers/Dimensions';

const PAGE_WIDTH = DEVICE_WIDTH;

const data = [
  {
    id: '1',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: '2',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
  {
    id: '3',
    image:
      'https://www.jiomart.com/images/cms/aw_rbslider/slides/1715585555_snacksnsavingsleague.jpg?im=Resize=(1040,700)',
  },
];

const CircularSlider = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);
  const baseOptions = isVertical
    ? {
        vertical: true,
      }
    : {
        vertical: false,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
      };

  return (
    <View
      style={{
        height: PAGE_WIDTH * 0.6,
        alignItems: 'center',
      }}>
      <Carousel
        width={PAGE_WIDTH}
        height={PAGE_WIDTH * 0.6}
        vertical={false}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <Image style={styles.img} source={{uri: item.image}} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
});

export default CircularSlider;
