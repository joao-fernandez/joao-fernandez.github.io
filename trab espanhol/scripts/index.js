const videos = [
	"https://www.youtube.com/embed/U_6NRddULq4",
	"https://www.youtube.com/embed/jvUOYtln23s",
	"https://www.youtube.com/embed/T1mhNddn83M",
	"https://www.youtube.com/embed/Had8to1Hr3M",
];

const ChangeVideo = videoid => {
	document.querySelector("iframe").src = videos[videoid];
};
