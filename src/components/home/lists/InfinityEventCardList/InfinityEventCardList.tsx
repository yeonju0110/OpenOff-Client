import { InfiniteData } from '@tanstack/react-query';
import EmptyScreen from 'components/common/EmptyScreen/EmptyScreen';
import EventCard from 'components/home/cards/EventCard/EventCard';
import EventCardSkeleton from 'components/suspense/skeleton/EventCardSkeleton/EventCardSkeleton';
import MENT_HOME from 'constants/home/homeMessage';
import useNavigator from 'hooks/navigator/useNavigator';
import MainTapEventInfoResponseDto from 'models/event/response/MainTapEventInfoResponseDto';
import { FlatList, View } from 'react-native';
import { InfiniteScrollApiResponse } from 'types/ApiResponse';
import infinityEventCardList from './InfinityEventCardList.style';

interface Props {
  pageData?: InfiniteData<
    InfiniteScrollApiResponse<MainTapEventInfoResponseDto>
  >;
  isFetching: boolean;
  isLoading: boolean;
  hasNextPage?: boolean;
  handleEndReached: () => void;
  type: 'popular' | 'category';
}

const InfinityEventCardList = ({
  pageData,
  isFetching,
  isLoading,
  hasNextPage,
  handleEndReached,
  type,
}: Props) => {
  const { stackNavigation } = useNavigator();

  const flatEventList = pageData?.pages.flatMap((page) => page.data.content);

  const isHasNextSkeleton = hasNextPage && isFetching;

  const handleEventPress = (eventId: number) => {
    stackNavigation.navigate('EventDetail', {
      id: eventId,
    });
  };

  return (
    <View style={infinityEventCardList.container}>
      {flatEventList?.length === 0 ? (
        <EmptyScreen content={MENT_HOME.MAIN.EMPTY_EVENT} />
      ) : (
        <FlatList
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={flatEventList}
          columnWrapperStyle={infinityEventCardList.rowGap}
          renderItem={(event) => (
            <EventCard
              key={event.index}
              type={type}
              event={event.item}
              handlePress={handleEventPress}
            />
          )}
          ListFooterComponent={
            isHasNextSkeleton || isLoading ? (
              <View style={infinityEventCardList.skeletonContainer}>
                {new Array(4).fill(1).map((_, _idx) => (
                  <EventCardSkeleton
                    // eslint-disable-next-line react/no-array-index-key
                    key={`eventCard-skeleton-${_idx}`}
                    type="scrap"
                  />
                ))}
              </View>
            ) : undefined
          }
          onEndReachedThreshold={0.5}
          onEndReached={handleEndReached}
        />
      )}
    </View>
  );
};

export default InfinityEventCardList;
