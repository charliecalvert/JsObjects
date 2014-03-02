Param(
  [Int32]$option=-1
)

switch ($option) {
	0 { Set-Location -Path C:\Src\Git }
	1 { Set-Location -Path C:\Src\Git\CloudNotes }
	2 { Set-Location -Path C:\Src\Git\JsObjects }
	3 { Set-Location -Path C:\Src\Git\Writing }
	default { 
		Echo "0: C:\Src\Git"
		Echo "1: C:\Src\Git\CloudNotes"
		Echo "2: C:\Src\Git\JsObjects"
		Echo "3: C:\Src\Git\Writing"
	}
}
