data = `
<html>
<head>
<title>Writing E-Mail</title>
<display
noscroll
showwhencomplete
>
</head>
<body hspace=0 vspace=0
text='E6E6E6' link='E6E6E6' vlink='E6E6E6'
fontsize='medium'
bgcolor=00292f
>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=560 height=96 valign=top>
<table background="wtv-guide:/ROMCache/help/common/helpMastheadBlank.swf" width=560 height=96 cellspacing=0 cellpadding=0>
<tr>
<td width=107 height=96 valign=top rowspan=2>
<spacer type=vertical height=7><br>
<spacer type=horizontal width=7>
<a href='wtv-home:/home'>
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
</a>
<td width=453 valign=top>
<spacer type=vertical height=54><br>
<font size=+3><blackface>
Writing E-Mail&nbsp;
</blackface></font>
<tr>
<td align=right>
&nbsp;
</table>
<tr>
<td width=560 valign=top height=225>
<table cellpadding=0 cellspacing=0 width=560>
<tr>
<td width=25 height=17>
<td width=535>
<tr>
<td>
<td height=225 rowspan=2 valign=top>
<table cellpadding=0 cellspacing=0 height=225 width=535>
<tr>
<td height=15>
<tr>
<td>
<td valign=top>
<table cellpadding=0 cellspacing=0 width=100%>
		<tr>
			<td colspan=3 height=0>
		<tr>
			<td valign=top width=175 >	
<p><b>Step&nbsp;3</b>
		<spacer type=vertical height=20>
	
After the word <b>To</b>, type in the e-mail
address of the person you're writing to.
<p>
Here's an example of an e-mail address:
<p>
<b>somename@webtv.net</b>

			<td width=10>
			<td width=267 valign=top>
				<table align=right cellpadding=0 cellspacing=0 background="`;
if (session_data.hasCap("client-has-tv-experience"))
	data += "wtv-guide:/images/help/mail/sendmail-plus.jpg"
else
	data += "wtv-guide:/images/help/mail/sendmail-classic.jpg"
data += `" width=267 height=200>
					<tr>
						<td valign=top>
							
			<spacer type=vertical height=60><br><spacer type=horizontal width=110>
			<img src="wtv-guide:/images/help/common/arrowUL.gif" width=55 height=79>
	
				</table>
		<tr>
			<td rowspan=3 height=10>
	</table>
</tr>
<td width=35>
<td width=450>
<td width=50>
</table>
</table>
<tr>
<td valign=bottom align=right>
<form>
<font color=ffcf69><shadow>
<input type=button usestyle borderimage="file://ROM/Borders/ButtonBorder2.bif"
action="Writing4"
value="Continue"
width='110'
selected>
<spacer type=horizontal width=20>
</shadow></font>
</form>
</table>
</body>
`; 