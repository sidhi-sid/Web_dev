function download(url){
	return new Promise((resolve,reject) => {
	console.log("Downloading from "+url)
	if(!url.startsWith('http'))
	{
	 return reject(new Error('URL must start with http'))
	}
     setTimeout(()=>{
     	let savedfile=url.split("/").pop()
     	console.log("Downloaded and saved as "+savedfile)
     	resolve(savedfile)
     },3000)
 })
}

function compress(file,format){
	return new Promise((resolve,reject)=>{
		console.log("Compressing file "+file)
	if(['zip','gzip','7z'].indexOf(format)==-1){ 
		return reject(new Error('We only support zip,gzip,7z'))
	}
	setTimeout(()=>{
		let archive=file.split(".")[0]+"."+format
		console.log("Compressed and saved as "+archive)
		resolve(archive)

	},2000)

	})
}
	
function upload(server,file){
	return new Promise((resolve,reject) => {
		console.log("Uploading "+file+" to "+server)
	if(!server.startsWith('ftp://')){
	 return reject(new Error('We only upload to FTP servers'))
	}
	setTimeout(()=>{
		let remotepath=server+"/"+file
		console.log("Uploaded as "+remotepath)
	    resolve(remotepath)
	},1000)

	})
}

//download("https://online.codingblocks.com/app/player/66486/content/62623/5717/video?code=jZVnINGN")
//	.then((file)=>{
//		compress(file,"zip")
//		.then((archive)=>{
//			upload("ftp://file.com",archive)
//		})
//	})
//better way than the commented one
download("https://online.codingblocks.com/app/player/66486/content/62623/5717/video?code=jZVnINGN")
	.then((file)=>compress(file,"zip"))
	.then((archive)=>upload("ftp://file.com",archive))
 .catch((err)=>console.log(err))