import RNFetchBlob from 'rn-fetch-blob';
import { Platform, PermissionsAndroid } from 'react-native';

export const getDownloadPermissionAndroid = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'File Download Permission',
                message: 'Your permission is required to save Files to your device',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
    } catch (err) {
        console.log('err', err);
    }
};

export const downloadFile = async (url, SongName) => {
    // Get the app's cache directory
    const { config, fs } = RNFetchBlob;
    const cacheDir = fs.dirs.DownloadDir;

    // Generate a unique filename for the downloaded image
    const filename = (SongName) ? SongName : url.split('/').pop();
    const imagePath = `${cacheDir}/${filename}.mp3`;
    try {
        // Download the file and save it to the cache directory
        const configOptions = Platform.select({
            ios: {
                fileCache: true,
                path: imagePath,
                appendExt:".mp3",
            },
            android: {
                fileCache: true,
                path: imagePath,
                appendExt:".mp3",
                addAndroidDownloads: {
                    // Related to the Android only
                    useDownloadManager: true,
                    notification: true,
                    path: imagePath,
                    description: 'File',
                },
            },
        });

        const response = await RNFetchBlob.config(configOptions).fetch('GET', url);

        // Return the path to the downloaded file
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};