import Icon from 'components/common/Icon/Icon';
import Text from 'components/common/Text/Text';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { Event } from 'types/event';
import SpaceLayout from 'components/layout/Space/SpaceLayout';
import eventCardStyles from './EventCard.style';

interface Props {
  event: Event;
  type?: 'default' | 'scrap';
  handlePress: () => void;
}

const EventCard = ({ event, type = 'default', handlePress }: Props) => {
  const calcWidth =
    type === 'default' ? 200 : Dimensions.get('window').width / 2 - 30;

  return (
    <View style={eventCardStyles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
        <Image
          style={{
            ...eventCardStyles.image,
            width: calcWidth,
            height: calcWidth,
          }}
          source={{ uri: event.images[0] }}
        />
      </TouchableOpacity>

      <SpaceLayout size={3}>
        <Text
          color={type === 'default' ? 'white' : 'main'}
          style={eventCardStyles.titleText}
        >
          {event.name}
        </Text>
        <View style={eventCardStyles.iconText}>
          <Icon name="IconPlace" size={10} fill="main" />
          <Text variant="body3" color="white">
            {event.place}
          </Text>
        </View>
        <View style={eventCardStyles.iconText}>
          <Icon name="IconUser" size={10} fill="main" />
          <Text variant="body3" color="white">
            {event.participant}명 참여중
          </Text>
        </View>
      </SpaceLayout>

      <TouchableOpacity style={eventCardStyles.likeButton}>
        {type === 'default' &&
          (event.like ? (
            <Icon name="IconFillHeart" size={20} fill="main" />
          ) : (
            <Icon name="IconHeart" size={20} />
          ))}
      </TouchableOpacity>
    </View>
  );
};

export default EventCard;
