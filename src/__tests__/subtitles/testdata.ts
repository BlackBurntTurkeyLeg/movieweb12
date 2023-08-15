const srt = `
1
00:00:00,000 --> 00:00:00,000
Test

2
00:00:00,000 --> 00:00:00,000
Test
`;
const vtt = `
WEBVTT

00:00:00.000 --> 00:00:04.000 position:10%,line-left align:left size:35%
Where did he go?

00:00:03.000 --> 00:00:06.500 position:90% align:right size:35%
I think he went down this lane.

00:00:04.000 --> 00:00:06.500 position:45%,line-right align:center size:35%
What are you waiting for?
`;
const ass = `[Script Info]
; Generated by Ebby.co
Title: 
Original Script: 
ScriptType: v4.00+
Collisions: Normal
PlayResX: 384
PlayResY: 288
PlayDepth: 0
Timer: 100.0
WrapStyle: 0

[v4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default, Arial, 16, &H00FFFFFF, &H00000000, &H00000000, &H00000000, 0, 0, 0, 0, 100, 100, 0, 0, 1, 1, 0, 2, 15, 15, 15, 0

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:10.00,0:00:20.00,Default,,0000,0000,0000,,This is the first subtitle.
Dialogue: 0,0:00:30.00,0:00:34.00,Default,,0000,0000,0000,,This is the second.
Dialogue: 0,0:00:34.00,0:00:35.00,Default,,0000,0000,0000,,Third`;

const visibleSubtitlesTestVtt = `WEBVTT

00:00:00.000 --> 00:00:10.000 position:10%,line-left align:left size:35%
Test 1

00:00:10.000 --> 00:00:20.000 position:90% align:right size:35%
Test 2

00:00:20.000 --> 00:00:31.000 position:45%,line-right align:center size:35%
Test 3
`;

const multilineSubtitlesTestVtt = `WEBVTT

00:00:00.000 --> 00:00:10.000
- Test 1\n- Test 2\n- Test 3

00:00:10.000 --> 00:00:20.000
- Test 4

00:00:20.000 --> 00:00:31.000
- Test 6
`;

export { vtt, srt, ass, visibleSubtitlesTestVtt, multilineSubtitlesTestVtt };