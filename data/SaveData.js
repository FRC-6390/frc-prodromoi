import * as FileSystem from 'expo-file-system';
import { Permissions } from 'expo-permissions';

export const saveMatch = async (data, name) => {
   // requestWritePermission();
    const folder = "matches"
    const folderInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + folder);

    if (!folderInfo.exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + folder);
    }

    try{
        const json = JSON.stringify(data)
        const fileUri = FileSystem.documentDirectory + folder+'/'+name+'.json';
        console.log(fileUri)
        await FileSystem.writeAsStringAsync(fileUri, json);
        console.log('Data saved successfully');
      } catch (error) {
        console.log('Error saving data: ', error);
      }
};

export const listMatches = async => {
    
}