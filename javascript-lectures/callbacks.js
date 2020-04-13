//downloads a file,compresses it and uploads it somewhere else
function download(url,downloaded){
	console.log("Downloading from "+url)
	if(!url.startsWith('http')){
	 return downloaded(new Error('URL must start with http'))
	}
     setTimeout(()=>{
     	let savedfile=url.split("/").pop()
     	console.log("Downloaded and saved as "+savedfile)
     	downloaded(null,savedfile)
     },3000)


}
function compress(file,format,compressed){
	console.log("Compressing file "+file)
	if(['zip','gzip','7z'].indexOf(format)==-1){ 
		return compressed(new Error('We only support zip,gzip,7z'))
	}
	setTimeout(()=>{
		let archive=file.split(".")[0]+"."+format
		console.log("Compressed and saved as "+archive)
		compressed(null,archive)

	},2000)



}
function upload(server,file,uploaded){
	console.log("Uploading "+file+" to "+server)
	if(!server.startsWith('ftp://')){
	 return uploaded(new Error('We only upload to FTP servers'))
	}
	setTimeout(()=>{
		let remotepath=server+"/"+file
		console.log("Uploaded as "+remotepath)
	    uploaded(null,remotepath)
	},1000)



}
download("https://online.codingblocks.com/app/player/66486/content/62623/5717/video?code=jZVnINGN",(err,file)=>{
	if(err) throw err
	compress(file,"zip",(err,archive)=>{
		if(err){
			console.warn(err)
			archive=file
		}
		upload("ftp://file.com",archive,(err)=>{
	    if(err) throw err
	})
})
})