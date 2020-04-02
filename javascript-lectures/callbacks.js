//downloads a file,compresses it and uploads it somewhere else
function download(url,downloaded){
	console.log("Downloading from "+url)
     setTimeout(()=>{
     	let savedfile=url.split("/").pop()
     	console.log("Downloaded and saved as "+savedfile)
     	downloaded(savedfile)
     },3000)


}
function compress(file,format,compressed){
	console.log("Compressing file "+file)
	setTimeout(()=>{
		let archive=file.split(".")[0]+"."+format
		console.log("Compressed and saved as "+archive)
		compressed(archive)

	},2000)



}
function upload(server,file,uploaded){
	console.log("Uploading "+file+" to "+server)
	setTimeout(()=>{
		let remotepath=server+"/"+file
		console.log("Uploaded as "+remotepath)
	    uploaded(remotepath)
	},1000)



}
download("https://online.codingblocks.com/app/player/66486/content/62623/5717/video?code=jZVnINGN",(file)=>{
	compress(file,"zip",(archive)=>{
		upload("https://file.com",archive,()=>{})
	})
})
