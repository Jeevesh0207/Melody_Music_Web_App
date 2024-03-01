import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
    RepeatMode,
    Event
} from 'react-native-track-player';

export async function setupPlayer() {
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    }
    catch {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            android: {
                appKilledPlaybackBehavior:AppKilledPlaybackBehavior.ContinuePlayback,
            },
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.SeekTo,
            ],
            compactCapabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
            ],
            progressUpdateEventInterval: 2,
            icon: require('./assets/img/logo.png'),
            
        });

        isSetup = true;
    }
    finally {
        return isSetup;
    }
}

export async function addTracks(List) {
    await TrackPlayer.add(List);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        console.log('Event.RemotePause');
        TrackPlayer.pause();
    });

    // TrackPlayer.addEventListener(Event.RemotePlay, () => {
    //     console.log('Event.RemotePlay');
    //     TrackPlayer.play();
    // });

    // TrackPlayer.addEventListener(Event.RemoteNext, () => {
    //     console.log('Event.RemoteNext');
    //     NextSong()
    // });

    // TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    //     console.log('Event.RemotePrevious');
    //     TrackPlayer.skipToPrevious();
    // });
    // TrackPlayer.addEventListener(Event.RemoteSeek, () => {
    //     console.log('Event.RemoteSeek');

    // });
}
