import * as FileSystem from 'expo-file-system';
import { Permissions } from 'expo-permissions';


export const saveFile = async (folder, name, data) => {
   // requestWritePermission();
    
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


export const readFile = async (folder, name) => {
    // requestWritePermission();
     
    const fileUri = FileSystem.documentDirectory + folder+'/'+name+'.json';
    const folderInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + folder);

    if (!folderInfo.exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + folder);
    }

     try{
        const content = await FileSystem.readAsStringAsync(fileUri);
        const data = JSON.parse(content);
        console.log('Data read successfully');
        return data;
      } catch (error) {
        console.log('Error reading data: ', error);
        return null;
      }
};

export const listMatches = async () => {
    try {
        const files = await listDirectory("matches")
        var data = [];
        files.forEach(element => {
            var name = element.replace(".json", "").replace("_", " ").split(" ").map((word) => word.charAt(0).toUpperCase() +word.slice(1)).join(" ")
            data.push({id: element, title: name })
        });
        console.log(data);
        return data;
      } catch (error) { 
        console.error(error);
      }
};

export const listDirectory = async (folder) => {
    try {
        const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory +folder);
        console.log(files);
        return files;
      } catch (error) { 
        console.error(error);
      }
};