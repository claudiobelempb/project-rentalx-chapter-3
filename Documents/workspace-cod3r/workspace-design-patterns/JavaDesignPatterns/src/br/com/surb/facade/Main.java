package br.com.surb.facade;

import java.io.File;

public class Main {
	public static void main(String[] args) {
		VideoConverter converter = new VideoConverter();
		File mp4Video = converter.convertVideo("youtubevideo.ogg", "mp4");
		System.out.println(mp4Video);
	}
}
