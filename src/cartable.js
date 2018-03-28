
/*
This create a header windows, for the watools.
all this takes inspiration  from "le-ruban-word" of the "cartablefantastique"
https://www.cartablefantastique.fr/outils-pour-compenser/le-ruban-word/
*/

//IMAGES  from https://www.iconfinder.com/
var imgs={
    config:"data:image/png;base64,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",
    cartable:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDExMCAxMTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDExMCAxMTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGcgaWQ9ImJyaWVmY2FzZV8xXyI+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7IiBkPSJNMTA5LjAxMSw1Ni42OTFjLTAuNzY5LTYuNTU0LTEuMjc0LTEzLjM2Ny0xLjUwNy0yMC40NTggICAgYy0wLjU1My0yLjc1NS0xLjQzMi01LjE4Ny0xLjgwMy04LjEyM2MtMC42MzgtMC45NjQtMC41NzMtMi42MzItMS41MDUtMy4zMDhjLTAuMzM4LTEuMzY4LTEuNTg2LTEuODIzLTIuNDA0LTIuNzA5ICAgIGMtMi4yNTktMC44MDctNi4wODYtMC43NzEtOC43MjgtMC4zMDFIODEuMzMxYy0xLjcxNiwwLjA5NC0zLjc5NywwLjcyMS01LjExNCwwLjMwMWMtMC44ODUtMi4xMjMtMC41NDMtNS40NzItMC42MDMtOC40MjQgICAgYy0wLjYzOC0yLjA2Ny0xLjIwMy00LjIxMS0yLjQwOC01LjcxNmMtMy4xMDgtMS41NDMtOS4zMDUtMS40NjgtMTMuNTM1LTAuOTAzYy00LjIxOCwwLjA5Ni04LjE1MiwwLjQ3Mi0xMi42MzcsMC4zMDMgICAgYy0xLjM5OCwwLjUwNi0zLjc1NywwLjA1MS01LjExMywwLjYwMWMtMC4zMiwwLjY4My0xLjg5MywwLjExNC0yLjcwNywwLjNjLTAuODA0LDAuMTk5LTEuODc5LDAuMTI3LTIuNDA4LDAuNjA0ICAgIGMtMy41MjEsMC40OS02LjA4NiwxLjkzMy03LjUyMiw0LjUxMmMtMC40NDIsMS41NjItMC4yNzksMy43MzMtMC4zMDQsNS43MTdjLTEuOTQyLTEuMTMxLTQuOTgxLTAuNTc1LTUuMTEzLDEuODA2ICAgIGMwLjE3MiwwLjczMywwLjI2LDEuNTQ2LDEuMjA0LDEuNTAxYzAuMDc0LDAuOTM0LDIuNDc2LTAuNDY5LDIuMTA5LDAuOTA2Yy00LjY5NiwwLjczMy05Ljk4Ny0wLjQxLTE1LjM0NywwICAgIGMtMi4xMjcsMC41NzktNC42NTEsMC43NjItNi42MTYsMS41MDRjLTEuOTg2LDEuMjIzLTMuNTUyLDIuODY0LTQuODE0LDQuODEyYy0wLjMxMiw2LjE0My0wLjg1OCwxMi43MiwwLjI5OCwxOC4wNTF2Ni45MiAgICBjMS4xNzIsNC4xODIsMC4zODEsOC40NjcsMC45MDYsMTMuMjM3YzAuNTEsMC41OTEsMC45MjMsMS4yODMsMS44LDEuNTAzYzAuNzc4LDAuNDI5LDEuNzA1LDAuNzA2LDEuODA5LDEuODA1ICAgIGMtMS4zOTUsNy41OTQsMC4wMjMsMTYuMjg5LTAuMzAyLDI0LjY3MmMtMC4zMzUsMi4yOTQtMS4wNjIsNC45OTgsMC4zMDIsNi42MTdjMy4wMTQsMS4yOTgsOC40OTksMC4xMjEsMTIuMDMzLDAuOSAgICBjMS40MzEtMC4xNzQsMi43NzUtMC40MzMsNC41MS0wLjI5OWMzLjYwMi0wLjkxLDcuMzkzLTEuNjM2LDExLjQzNS0yLjEwNWMyMS4zNTYsMC4zMDEsNDIuMTc4LDEuMTQyLDY0LjA3OSwwLjkwMiAgICBjMi41OTItMC41MTksNS41NDUtMC42NzQsNy4yMjEtMi4xMDhjMC40MTYtMi43OTEsMC45MTYtNS41MDUsMS4yMDMtOC40MjNjLTAuNTcyLTQuMTQyLTAuMTk0LTkuMjMzLTAuMy0xMy44MzkgICAgYzAuMjAzLTQuNjU2LTEuMDgtOS4yOTUtMC4zMDQtMTMuNTM3YzAuMzA5LTAuMjkzLDAuNjEtMC41OTYsMC45MDItMC45MDJjMC43NDgsMC4wNDIsMS40NjQsMC4wNTUsMS41MDQtMC42MDIgICAgYzEuMDA2LTAuNDAxLDEuODc1LTAuOTM1LDIuNDA4LTEuODA3QzExMC4zNzQsNTguNTM4LDEwOC44NTcsNTguNDQ3LDEwOS4wMTEsNTYuNjkxeiBNMzQuNzAxLDE1LjQ3NiAgICBjMi4xOTEtMS4zMiw2LjQ3My0wLjU0Niw4LjcyNS0xLjgwN2M5LjI0NiwwLjcxMywxNi42MTItMi4wMjIsMjUuMjcyLTAuOTA0YzAuNzExLDEuMzU0LDEuMzA5LDQuMjI1LDAuNjAxLDYuMDIgICAgYy0xLjY2OS0wLjEwOC0zLjAyMS0wLjU3OC00LjIxMiwwLjMwMWMtMS4zMTQsMC4yODktMS4wMDMsMi4yMDUtMS41MDYsMy4zMDdjLTYuMzI5LTAuMTExLTEyLjM0NywwLjA5LTE4LjM0OSwwLjMwMiAgICBjLTAuOTkxLDAuMDE0LTEuNTAxLDAuNTEtMi43MSwwLjMwMmMtMC43MTktMC4xODUtMi4xNzksMC4zNzctMi40MDYtMC4zMDJjLTEuMTU5LDAuMDU5LTAuMzIxLTEuODg2LTAuOTAxLTIuNDA1ICAgIGMtMS4xOTgtMC41MS0zLjE3NS0wLjIzNi00LjgxNC0wLjMwM0MzNC41MzksMTguNTIyLDM0LjA4NSwxNi40NjIsMzQuNzAxLDE1LjQ3NnogTTYuNzIyLDYzLjAwOWMwLjEzMi0wLjQzOCwwLjI2NCwwLjAyOSwwLjYwMywwICAgIEM3LjI1LDYzLjM4OCw2LjcyNSw2My4zMTIsNi43MjIsNjMuMDA5eiBNMTcuNTUzLDk3LjkwN2MtMS41MjYtMC4wMTktMi40OTMsMC41MTctNC4yMSwwLjMwMSAgICBjLTEuMjc5LTAuMjMtMy41NjMsMC41NTYtMy45MTUtMC42MDJjLTAuMzg5LTEuMjk4LDAuNjI0LTEuMTg1LDEuMjA1LTEuNTA1YzAuMzUtMC41NDksMC43ODctMS4wMTgsMS4yMDItMS41MDR2LTMuOTEgICAgYzIuNzksMC4yMTksNC40MzcsMS41NzgsNS43MTgsMy4zMDlWOTcuOTA3eiBNODQuMDM5LDg5Ljc4NGMwLjAwNCwxLjcwOC0wLjIwOCwzLjE5OC0wLjU5OSw0LjUxMyAgICBjLTEuNjQ0LDAuNjI5LTIuODk0LTAuMTAxLTQuODE1LDBjLTIuMDI2LDAuMjc5LTQuMTE5LDAuNDg5LTYuMDE2LDAuOWgtNi4zMTdjLTEuMDQ0LTAuMjM4LTEuMTU3LDAuNDUxLTIuMTA3LDAuMzA1SDM4LjYxICAgIGMtMS44MzQsMC4zNjYtNC4wODgsMC4zMjMtNi4zMTYsMC4zMDFjLTEuNTQ3LDAuNDU1LTMuOSwwLjExMy01LjExMywwLjkwMmMtMS44MTYtMC4yMjEtMy43NCwwLjc0OS00LjgxNSwwLjI5OSAgICBjMC4xNS0xLjk3MiwwLjMyOC0yLjkxMS0wLjI5OS00LjUxNGMtMS4xNzUtMy4xMzUtMy45MjQtNC43MDMtNi42MjEtNi4zMTdjLTEuMDk4LTAuMjAzLTIuMTg2LTAuNDE3LTMuNjExLTAuMyAgICBjMC4wNzctNS45OTMtMC4yMi0xMS42MDktMS4yMDItMTYuNTQ3YzUuMzIyLTAuNjk3LDExLjkyOC0wLjEwNCwxNy43NTItMC4zMDFjMS4wNDEtMC4yNDEsMS4xNTUsMC40NDcsMi4xMDYsMC4zMDEgICAgYzMuNzgyLDAuMDI5LDcuNzcxLTAuMTUsMTEuMTMsMC4yOTljMC42ODQsMC45MjUsMC41MjEsMi42ODksMS41MDMsMy4zMTFjMC42OTYsMC45MDgsMS41MDEsMS43MTEsMi40MDcsMi40MDcgICAgYzQuMDY2LDAuNjIyLDcuOC0wLjIyMSwxMi4wMzUsMC4zMDFjMy4xNDUtMC4yNjQsNS45MjQtMC44OTIsNy44MjEtMi40MDNjMS41OTQtMC44MTcsMi4wNzctMi43MzgsMy4zMS0zLjkxNCAgICBjMS41NjItMC40NDIsMy43MjktMC4yNzksNS43MTctMC4zMDFjNy4wMDUtMS4xMTMsMTMuNzA4LTIuNTM1LDIxLjY2LTIuNzA3YzAuNDg0LDAuMDg2LDAuNTE2LTAuMjg1LDAuOTAyLTAuMzAzaDIuMTA3ICAgIGMwLjk2LDIuMDQ5LDAuNTQzLDUuNDc2LDAuOSw4LjEyM2MwLjE3OSwyLjczLDAuMzg4LDUuNDM1LDAuNjA0LDguMTI1Yy0wLjkyMiwwLjI5MS0zLjM1Ny0wLjE2Mi00LjgxNC0wLjMgICAgYy0xLjQyMiwwLjQzMS0yLjQ1MSwwLjQwMy0zLjkxLDAuOWMtMC4zMTcsMC4xMS0wLjY4MywwLjUxNS0wLjkwNCwwLjYwNGMtMC40OTUsMC4xOTYtMC45OTMsMC4wNjMtMS41MDQsMC4yOTkgICAgYy0wLjgzNiwwLjM4OS0xLjU3LDEuMzQzLTIuNzA2LDEuODA2Qzg1Ljc2Myw4Ni44OTQsODUuMzM2LDg4Ljc3Niw4NC4wMzksODkuNzg0eiBNMTEuNTM1LDYxLjUwMyAgICBjMC4yNDIsMC4xNiwwLjQ4OSwwLjMxNSwwLjkwNCwwLjMwMWMwLjI5NiwxLjY0My0xLjE4NSwyLjExLTEuODA3LDEuMjA1QzEwLjcyNyw2Mi4yOTgsMTEuNjc3LDYyLjQ0NywxMS41MzUsNjEuNTAzeiAgICAgTTI4LjY4Myw2MS41MDNjMS4xMjEsMC4yMywwLjE2NSwxLjQyOC0wLjkwNCwxLjIwNUMyNy41MTUsNjEuNzQzLDI4Ljc3Miw2Mi4yOTQsMjguNjgzLDYxLjUwM3ogTTQ0LjMyOSw2Ni4zMTggICAgYzAuMDEzLTIuMTk2LDEuNDc0LTIuOTM4LDEuODA1LTQuODE1YzIuMjE2LDAuMjE1LDMuNzI4LTAuMjgxLDUuNDE1LTAuNjAyYzMuODE5LDAuODMyLDYuMzI3LTAuOTYzLDEwLjIyNy0wLjg5OSAgICBjMC4xODUsMS43MjIsMS4yNjQsMi41NDcsMS44MDUsMy45MDljMC4yMDMsMS43MDUtMC4yNzQsMi43MzItMC41OTksMy45MTFjLTQuMDgyLDEuMzM3LTguNjU5LDIuMTc0LTEzLjU0LDIuNzA4ICAgIGMtMS4zOTEtMC4yMTYtMS45ODctMS4yMjEtMi43MDYtMi4xMDdDNDUuNjk5LDY3Ljk1NCw0NC42MzUsNjcuNTE1LDQ0LjMyOSw2Ni4zMTh6IE05OS45ODQsOTMuOTk2ICAgIGMtMS41MzcsMC44MTItMy4zMjgsMC4wNDUtNS4xMTQsMGMtMi4zMDEtMC4wNi00LjcsMC41NTItNi42MTgsMGMtMC4wNDctMy4wNTcsMS43NzEtNC4yNDQsMy4wMDctNi4wMTggICAgYzIuNzYtMC40OSw2LjIwNS0xLjQyLDkuMzI4LTAuNjAyQzEwMC41ODMsODkuNzg0LDEwMC43NDcsOTIuMzUsOTkuOTg0LDkzLjk5NnogTTc3LjQyMiw2MC4zMDFoLTYuMDE4ICAgIGMtMC4zODYsMC4wMTctMC40MTcsMC4zODMtMC45MDMsMC4zYy0xLjM3MSwwLjAzNS0xLjIyOCwxLjU4LTIuNDA2LDEuODA3Yy0wLjMxMy0yLjQ5NS0wLjg2My00Ljc1Ni0xLjgwNC02LjYyMSAgICBjLTEuNDgzLTEuMjI0LTMuODI4LTEuNTg2LTYuMzE5LTEuODAzYy0zLjM2LDAuMzUxLTYuMTQsMS4yODEtOS4zMjYsMS44MDNjLTIuNTk2LDAuMTkxLTQuMjk0LTAuNTIxLTYuOTIxLTAuMjk5ICAgIGMtMS4yNzcsMC40MjYtMi40MjEsMC45ODYtMy4zMDksMS44MDVjLTAuMTU5LDEuODQ3LDAuMzQyLDQuMzU3LTAuMzAxLDUuNzE3aC0yLjEwM2MtMS4xOSwwLjM4My0wLjczMS0wLjg3Ny0xLjUwOC0wLjkwMiAgICBjLTEuMDM4LDAuMzYzLTIuMjU3LDAuNTQ5LTMuNjA3LDAuNjAyYy0xLjAzNy0wLjQ3Mi0xLjMwMS0xLjcwOS0xLjgwOC0yLjcwNmMtMS4zNzUtMC4yNzItMS43MDYsMC40OTgtMi43MDYsMC41OTkgICAgYzAuMDcxLTEuMjc0LTAuMDI0LTIuMzgzLTAuOTA0LTIuNzA3Yy0yLjkxOSwwLjU5NC0zLjY0NCwzLjM3OS02LjYyLDMuOTFjMC4xMDItMC43MDEsMC4zMDktMS4yOTUsMC45MDItMS41MDMgICAgYy0xLjI0LTAuNjI0LTEuMjcxLTEuNDE5LTAuNTk5LTIuNzA2Yy0xLjI1MS0wLjk1OC0xLjgwMSwwLjg2Ni0zLjAwOCwwLjkwMWMwLjYyOS0wLjc3MiwwLjgxLTIsMS4yLTMuMDA5ICAgIGMtMC4wNjgtMC40My0wLjQ5NC0wLjUwOS0wLjU5OS0wLjkwMmMtMi41OTEtMC4yODYtMi44MTYsMS43OTYtNC44MTQsMi4xMDVjMC4yNzktMS44ODMtMS4xMzctMi4wNzQtMS44MDktMy4wMSAgICBjMC4zMzgtMS4yNzEsMC45NjEtMi4yNTEsMS4yMDktMy42MWMtMC4yLTEuMzQtMS44NzItMC41NDQtMi40MDgtMC45MDFjMC4zODUtMS4yMDcsMS41MjktMi45NTgsMC42LTQuNTE0ICAgIGMtMS4wMTctMC4xMTMtMS4yODMsMC41MjMtMS44MDUsMC45MDJjLTAuNjY3LTAuMTI5LTAuNzUyLDEuODA5LTEuMjAyLDAuOTA0Yy0wLjAzNS0xLjc0MiwxLjMxOC0yLjA5LDEuNTA1LTMuNjEgICAgYzAuOTUtMC41MTYsMS43MjEtMi40NjQsMC42LTMuMzFjLTEuNzY5LDAuMjM2LTIuMzk2LDEuNjE1LTMuNjEsMi40MDVjMC4wMzEsMC4zNjYtMC40MzcsMC4xODgsMCwwICAgIGMwLjYxMS0xLjY5MiwxLjM3MS0zLjI0LDIuMTA2LTQuODEyYzAuNzU3LTEuMzEyLDIuNDUyLTIuNzM0LDEuNTA0LTQuODE1Yy0xLjMxOS0wLjMxNS0wLjk4NiwxLjAxOS0yLjEwNSwwLjkwMyAgICBjLTAuMDM1LTAuMzY3LTAuMDktMC43MDktMC42MDItMC42Yy0xLjMxOC0wLjMxNS0wLjk5LDEuMDE2LTIuMTA4LDAuOXYtMi43MDdjOC40OTMtMi42ODgsMjAuNzI4LTAuMDE1LDMwLjM4Ni0xLjIwM2g1LjExNCAgICBjNi43MzMtMC40OSwxMy42NjUtMC43NzYsMjAuNzYtMC45MDRjOC4yMjktMC40OTcsMTYuODE3LTAuNjM2LDI1LjU3My0wLjYwMWMzLjc1OS0wLjUyOSw2LjkyOS0wLjAyNiwxMS4xMzEtMC4zMDEgICAgYzEuMzA0LDIuNDA5LDEuNTAzLDUuOTE5LDIuNDA1LDguNzI2Yy0wLjQyMyw3Ljc0NSwxLjYwNCwxMy4wMzgsMS41MDQsMjAuNDU3Qzk0LjU4OCw1OC40MTcsODUuNDY2LDU4LjgyLDc3LjQyMiw2MC4zMDF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==",
    close:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/0lEQVRYR62XWaiWVRSGn9OkjZpUBmUDpKY2YTSQEZWBlYmIoEfNwqQIiihsgKKLoLIZuinoRKZYoZKFENVNE3lzUojIi8oG6qrSoMEGLYtH9pbF8vv+8x1p3RzO/tfw7rXXetf6+uguRwGzgEuBs4FTAc+Un4GvgY+Bd4E3gF+7uO7roHQ6cDewEBjRQV+VP4CXgMeBz3vZ9AJwOPAQcCtwYMfAWe1v4Gng/gJqHzdtALz1a4B//w/ZAswBvsjOmgCcB7wFjGmI/CXwCvAOoNPtRecYYAowHVhQ6iObbwOuBDbHHzKAScCHDcENbB28DuweIiU+11zgUeCUpCuIabEuIgDfXHQTk9GLwC3A78N8iyOAZ4Frk52ZO7/6iwAsltuS8nLgPuDfYQav6vp/DLgz2T8FLPOsApgMfJKq3ZvfkIIf0OEJso4xVpc2rjjsjjOAzyqAlcB1AaVvflZKu6QjwTxTCrEpKab7RuCaREQ+x6fAycHoBWCpAEYD3wOHhB8tovXhf4O/DVxYMmAguyGKZ17EDGwErkog+pPNn8BYAXhzDat4+wkh1Tp8H7g46NgJi4GXy1kMXtXeAy4PT2h3bE2dsVAApmJJcP5gYa54O9FLrYKpIgjB66PevP72T+GDdSlLjwD3hLMBjW29qeFQ1A6ULG0g1IvA2oKrN6OQXPX9kQB+Ao4O0cYCPzQA8KgJRFTtFVy9E4HvgsE2AdgScdgcBOioTdpADBVcf05Ti6/Krv0BcD2wInBIrglrpU1Gpqm4UwAOlDh4ji9t2eSkLXgEEbsj+xgHfJufYBNwbjh0ojntsljxsmOk7/pU8Qlzi0Y/TsM3w8Ggzp6XkcLhw4X/o6G3stVycEevZ/JBBtFEVs6Fu4Lj5zReVLi6nrvbjQ+FaIvZlpcEw1xw8wtPRBBm8YpARBa3JHdS8NMvAGnWtov7ng7XBsUjS+qc5W3Vro2ZEPAHwEzgt+AjX9S98bia0syG35RptSOB2FCGUWa4qiaIm4DZKbiXdA+QB6oMqFsBuISoEFPoCLXw4i6g/lC7QdbxfweX4KrsAlwBtsaickm4I5X+E2UVGypoW9/7HE8CtycFi3HPTIgADgMGy3IZ9X3Xm7t+aARD026a56XgLj4XVEbMS6lj2FnulhtF8rgXWFOou+3Gnh9cJqHfFPHN/c1iv6h0wx4fTWu5k9HlI4NQ30EiCNvSmvmx+Di2ZM5J6luf0IDQ4E5DP9/2ShMAf5QHXgXO7HXVYfxmULesr7JNGwD1DgUeKIUpieyP7CxFqJ+/mhz0AlD1TyudILUKqov4DbGqfJzuc+suT9AUxM32auAy4Jzy+TWq8MIvJb2mWgp24EQSawX9Hw+13nomqSJbAAAAAElFTkSuQmCC"}


//cut a div in vertical or horizontal colored band 
function cutDiv(element,hV,listColors){
    var nb=listColors.length;
   
    if(!hV){//vertical
	var height=(100/nb)+"%";
	var width=100+"%";
	var display="block"
    }
    else{//horizontal
	var width=(100/nb)+"%";
	var height=100+"%";
	var display="inline-block"
    }
    listColors.forEach((x)=>{
	var b=document.createElement("div");
	b.style.margin=0;
	b.style.padding=0;
	b.style.display=display;
	console.log("width "+width);
	b.style.width=width;b.style.height=height;
	b.style.backgroundColor=x;
	element.appendChild(b);
    });
}



function createButton(content,button){
    var div =document.createElement("div");
    console.log("adding "+button+ "on "+content);
    content.appendChild(div); 
    div.style.display="inline-block";
    div.id=button.name;
    div.style.border="solid";
    div.style.width="3em";
    div.style.height="3em";
    div.style.margin="1em";
    if(button.image){
	div.style.backgroundImage="url("+button.image+")";
	div.style.backgroundPosition="center";
	div.style.backgroundRepeat="no-repeat";
    }
    if(button.right){
	div.style.position="absolute";
			div.style.top="2px";

		div.style.right="2px";
	
    }
	
    cutDiv(div,button.hv,button.listColors);
    if(button.callback){div.addEventListener('click', button.callback);} //fix should not be close

    return div;
}
/*
style \n cartable
colorier \n lignes
colorier \n lignes 2
surligner \n blanc/jaune
surligner \n gris/jaune
colorier \n nombre
effacer \n couleurs
encadrer
enlever cadre
*/

var config,cartable,line3Color,line2color,lineBgColor,lineBg2color,colorMot,colorSyl,close;

var listeButton=[
    {name:"config",listColors:["rgba(255, 1, 1, .4)"],image:imgs.config,callback:config},
    {name:"cartable",listColors:["rgba(0, 155, 155, .4)"],/*color should be rgba to avoid masking image */
     image:imgs.cartable ,callback:cartable},
    {name:"v3colors",listColors:["blue","red","green"],callback:line3Color},
    {name:"v2colors",listColors:["blue","green"],callback:line2color},
    {name:"vBg1color",listColors:["yellow","transparent"],callback:lineBgColor},
    {name:"vBg2colors",listColors:["yellow","grey"],callback:lineBg2color},
    {name:"colorMot",listColors:[],callback:colorMot},
    {name:"colorSyl",listColors:[],callback:colorSyl},
    {name: "close",listColors:[],right:true,image:imgs.close,callback:close}
];




/*styleCartbale */



function init(){
    var banner=document.createElement("div");
    
    var content=document.createElement("div");
    
    
    banner.id="cartable-TAC";
    banner.style.border="solid";
    banner.style.position="fixed";
    banner.style.top="1%";
    banner.style.display="inline-block";
    banner.style.width="95%";
    banner.style.heigth="100%";
    //banner.style.overflow="auto";

    banner.style.marginLeft="1%";
    banner.style.marginRight="1%";
    banner.style.height='7em';
    
    banner.style.backgroundColor="pink";

    //buttons will be added in this relative content
    content.style.width="90%";
    content.style.height="100%";
    //content.style.overflow="auto";

    content.style.position="relative";
    banner.appendChild(content);
    
    document.body.appendChild(banner);
    listeButton.forEach((bx)=>{
	
	var b;
	    if(!bx.right){b=createButton(content,bx);}
	else{b=createButton(banner,bx);}

    });


    document.addEventListener('keydown', (event) => {
	const nomTouche = event.key;

	if (nomTouche != 'Control') {
	    // Pas d'alert si seule la touche Control est pressée.
	    return;
	}
	
	if (event.ctrlKey && nomTouche.toLowerCase==="o") {
	    // Même si event.key n'est pas 'Control' (par ex., 'a' is pressed),
	    // event.ctrlKey peut être true si la touche Ctrl est pressée à cet instant.
	    console.log(`Combinaison de ctrlKey + ${nomTouche} on ouvre`);
	} else {}

    }, false);

    console.log("returning");  
    return banner;
    
    
} 

/* callback functions */
////////////////////////

function close(){
    var banner=document.getElementById("cartable-TAC");
    if(banner){banner.style.display="none";}
}

function open(){
    var banner=document.getElementById("cartable-TAC");
    if(banner){banner.style.display="block";}
}

function config(){
    alert("not yet implemented");
}

function cartable(){
    setBodyFont(cartable);
     console.log("switched to cartable");
}
function line3Color(){
    dys.mark();
    addColor();var deco=addColor;
    console.log("switched to 3 color");
    
}
function line2color(){
    console.log("switched  2 color, to be configured");
}

function lineBgColor(){
     console.log("switched  to bg color, to be configured");
}
function lineBg2color(){
    dys.mark();
    addBgColor();var deco=addBgColor;
    console.log("switched to bg 2 color");
}

function colorMot(){alert("not yet implemented");};

function colorSyl(){
    //to be fixed
    var allp=document.getElementsByTagName("p");
    [].forEach.call(allp,(p)=>{
	p.innerHTML=cutInSylabe(p.innerHTML);
	addColor('syllabe');
	var deco=addColor;
    });};


init();
/*
function onResizeCartable(){alert('aaa');};

window.onresize = onResizeCartable;
document.addEventListener('onresize', onResizeCartable);
document.addEventListener('resize', onResizeCartable);
console.log("eeeeee");
*/
