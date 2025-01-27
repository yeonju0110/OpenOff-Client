import Spacing from 'components/common/Spacing/Spacing';
import Text from 'components/common/Text/Text';
import BookmarkButton from 'components/home/buttons/BookmarkButton/BookmarkButton';
import { getFieldName } from 'constants/interest/interest';
import dayjs from 'dayjs';
import useNavigator from 'hooks/navigator/useNavigator';
import { memo } from 'react';
import { Dimensions, Image, Pressable, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MapEvent } from 'types/event';
import mapEventCardStyles from './MapEventCard.style';

interface Props {
  event: MapEvent;
  distance: number;
}

const MapEventCard = ({ event, distance }: Props) => {
  const { stackNavigation } = useNavigator();
  const handleShowDetailEventInfo = () => {
    stackNavigation.navigate('EventDetail', {
      id: event.id,
    });
  };

  const calcDate = event.eventDateList
    ?.sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1))
    .map((date) => dayjs(date).format('MM월 DD일'));

  return (
    <View style={mapEventCardStyles.container}>
      <View style={mapEventCardStyles.textContainer}>
        <Text color="main" style={mapEventCardStyles.dateText}>
          {event.eventDateList.length === 1
            ? calcDate[0]
            : `${calcDate[0]} - ${calcDate[event.eventDateList.length - 1]}`}
        </Text>
      </View>
      <View style={mapEventCardStyles.textContainer}>
        <Pressable onPress={handleShowDetailEventInfo}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            variant="h3"
            color="white"
            style={mapEventCardStyles.titleText}
          >
            {event.title}
          </Text>
        </Pressable>
        <BookmarkButton isEventBookmarked={false} eventInfoId={event.id} />
      </View>
      <View style={mapEventCardStyles.textContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          variant="body2"
          color="grey"
          style={mapEventCardStyles.eventFieldContainer}
        >
          {event.fieldTypeList?.map((field) => getFieldName(field)).join('  ')}
        </Text>
      </View>
      <Spacing height={5} />
      <View style={mapEventCardStyles.textContainer}>
        <Text variant="body2" color="grey" style={mapEventCardStyles.titleText}>
          {distance}km
        </Text>
        <Text
          style={mapEventCardStyles.streetLoadText}
          numberOfLines={1}
          ellipsizeMode="tail"
          variant="body2"
          color="white"
        >
          {`${event.streetLoadAddress} ${event.detailAddress}`}
        </Text>
      </View>
      <Spacing height={9} />
      <View style={mapEventCardStyles.imageContainer}>
        <Carousel
          width={144}
          height={114}
          loop={false}
          overscrollEnabled={false}
          style={{ width: Dimensions.get('window').width - 20 }}
          panGestureHandlerProps={{ minDist: 20 }}
          data={event.imageList}
          renderItem={({ item, index }) => (
            <Pressable onPress={handleShowDetailEventInfo} key={index}>
              <Image
                key={index}
                style={mapEventCardStyles.eventImage}
                source={{ uri: item.imageUrl }}
              />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default memo(MapEventCard);
