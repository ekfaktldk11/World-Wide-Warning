import React from 'react';
import { View, Text, FlatList } from 'react-native';
import YouTube from 'react-native-youtube';
import Key from '../constants/key'
import Video from '../models/video';

const YouTubeList = props => {
    const { videoItems } = props;

    // let videoList = [];

    // for (let i in videoItems) {
    //     videoList.push(new Video(
    //         videoItems[i].id.videoId
    //     ));
    // }
    console.log(videoItems);
    // console.log(videoList);

    // const renderYouTubeListHandler = (itemData) => {
    //     console.log(itemData);
    //     return (
    //         <View>
    //             <YouTube
    //                 videoId={itemData.item.id}
    //                 apiKey={Key.youTubeKey}
    //                 play={true}
    //                 fullscreen={false}
    //                 loop={false}
    //                 onReady={(e) => console.log('onReady')}
    //                 onChangeState={(e) => console.log('onChangeState:', e.state)}
    //                 onChangeQuality={(e) => console.log('onChangeQuality: ', e.quality)}
    //                 onError={(e) => console.log('onError: ', e.error)}
    //                 style={{ width: '90%', height: 300 }}
    //             />
    //         </View>
    //     )
    // }

    return (
        <View style={{flex:1 ,justifyContent: 'center'}}>
            <YouTube
                    videoId={videoItems[0].id.videoId}
                    apiKey={Key.youTubeKey}
                    play={false}
                    fullscreen={false}
                    loop={false}
                    onReady={(e) => console.log('onReady')}
                    onChangeState={(e) => console.log('onChangeState:', e.state)}
                    onChangeQuality={(e) => console.log('onChangeQuality: ', e.quality)}
                    onError={(e) => console.log('onError: ', e.error)}
                    style={{ width: '90%', height: 300 }}
                />
        </View>
    )
}

export default YouTubeList;