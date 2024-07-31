export const checkFileExtension = (url="")=>{
    const fileExt = url.split(".").pop();
    if(fileExt === "mp4" || fileExt === "ogg" || fileExt === "webm")
        return "video";
    if(fileExt === "mp3" || fileExt === "wav")
        return "audio";
    if(fileExt === "jpg" || fileExt === "jpeg" || fileExt === "png" || fileExt === "gif")
        return "image";
    return "file";
}

export const transformImage = (url = "", width = 100) => {
  if(!url) return;
  const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
  return newUrl;
};

export const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)): null;
  else localStorage.setItem(key, JSON.stringify(value));
};