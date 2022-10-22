const DiagramIcons = {
  host: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABRCAYAAAAtvqMwAAAAAXNSR0IArs4c6QAAA2NJREFUeF7tnNFx2zAMhiG3e7TZJN5AG7TeoBf3PfF7nesGTTfQBnUmiTpIqh5lJ5EdKflBE4Sk+32Xp0AA+H8ERckGC+HHVYHCNTqDCwE4TwICIABnBZzDswIIwFkB5/CsAAJwVsA5PCtg0gDKb5/3+S++OI/DI/xfkUUt1Y/dOcHjKqAVPohe3JwTfD7XNjdS3W5ixqMHUH6/FGn+xASb+TW1SLHSVoQOQDvzPzycCFmLNHczF7dneEVYfsPfZeeftcjjUqqfNaqHEsA6zPxOwGKpJY4mNhm71yvCTqrtEs1fC6B5cUzxn7Uor76KFL9etHm8QKsAB3AapNri16LTYcp25ToszYddIT45cRHLq+vOrqe/zFpI8mnKOr6f+7/fvbO77C7P+K4oMYDTe8T7w5mexcDsJoBcKAkgl9IDcQiAAERk4CbMe8B+dvAmbFglXIIMxUVcEwCikqENARiKi7gmAEQlQxsCMBQXcU0AiEqGNgRgKC7imgAQlQxtCMBQXMQ1ASAqGdoQgKG4iGsCQFQytCEAQ3ER1wSAqGRoQwCG4iKuCQBRydCGAAzFRVwTAKKSoQ0BGIqLuCYARCVDGwIwFBdxTQCISoY2BGAoLuKaABCVDG0IwFBcxPW4AYQukW7PFDKiidkMNOKN4ufpE5MyabpHHTLNSqpbqHFR0aBx1J5aS7W9SDqAqTsr153+OZMesVctqndSbVdT1y1J/sftWyKK/jm8AkKmp4EUP8NOMtCxOek9MQD/aXoYjhJAWwV9N9rQmAw3J49Nx8h8+jYbqh5hPYC2CnhOxAAwtfhxAJ6i7/uGwykpM992vlkfh8ovNrEnBuiWoKFc2qr4eGhSjizoNy9rruNBF/CxAarMzzym5ilWGgCqzCOMy3W474QmcO1n9NtlAtAiTWxPAIkF1bojAK1iie0JILGgWncEoFUssX1+APvXGeHZYUzPD2E/vxNp7tG3mKk45AVw9M481RCS+gnn321yQsgNoPPKNqlwKZ1FvVKITSAfgOkcd5n14S0jgN4jL2MnjuV1Wb/nyAcgSNZ/7qilmFrfWZefkFxeAM8QFmEHNLLD/Rb3sW80tZS79vkBnJPtDK8lAGeoBEAAzgo4h2cFEICzAs7hWQEE4KyAc3hWAAE4K+Ac/j9oMVNwgtAfYAAAAABJRU5ErkJggg==",
  l2_switch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAAXNSR0IArs4c6QAABIJ0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJhcHAuZGlhZ3JhbXMubmV0JTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIyLTEwLTE0VDE1JTNBMDQlM0EyNC41NDFaJTIyJTIwYWdlbnQlM0QlMjI1LjAlMjAoV2luZG93cyUyME5UJTIwMTAuMCUzQiUyMFdpbjY0JTNCJTIweDY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMENocm9tZSUyRjEwNi4wLjAuMCUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjI3WmtFSjRTUENFcG9Ba3VKM1VoMSUyMiUyMHZlcnNpb24lM0QlMjIyMC40LjElMjIlMjB0eXBlJTNEJTIyZ29vZ2xlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyekVhelR2Y3BtOUJkVEpSWThOX3MlMjIlMjBuYW1lJTNEJTIyJUQwJUExJUQxJTgyJUQxJTgwJUQwJUIwJUQwJUJEJUQwJUI4JUQxJTg2JUQwJUIwJTIwMSUyMiUzRWpaUkxiNk13RUlCJTJGRGNkR2ZvU1FIQXROZDZ0dXBhMTYyR1BrZ2dOV0RZT01rNUQlMkIlMkJyV3hDWkJRdGNJUzhNM1Q0eGtITkNuYlg0clZ4UXRrWEFZRVpXMUFId0pDOEpLUXdDNlVuUjJKYU9SQXJrVG1sUWJ3Smo2NWg4alRnOGg0TTFIVUFGS0xlZ3BUcUNxZTZnbGpTc0ZwcXJZSE9ZMWFzNXpmZ0xlVXlWdjZUMlM2Y0hSTm9vSCUyRjVpSXYlMkJzaDR0WEdTa3ZYS2ZpZE53VEk0alJEZEJqUlJBTnA5bFczQ3BTMWVYeGRuOSUyRmlGOUpLWTRwWCUyQmljRnhzMTYlMkJ4b2ZkN2xtJTJCZkphdm1LenVWbmZleTVISmc5JTJCd1QxYWYlMkJ3bzBIMXluZGlzb29IRU5vdEpkU2NQWUxMUkFPQXhJY25rSG9URkpPc2xtJTJGWjNFdjBlUzN0dXRoRGd3aFhNc3VvVzQ4MG5DR1RqSG91dllIY0F6c2E4Wm1ZR3pMbWRpbzZza3phTHhrU3N0VERQJTJCWWU5YyUyRm9WR2FBR1ZxZjQ3YUEybFVTaDBLYzAlMkZIdW5lUzVGYkhRMjFvYXlwM1Zqc1Jjc3pDN3c0TlczRFZYJTJCa1hHMlAzSjJzOVdWNnRiYkhYN2E1SGV0Rktwb1U4R2FoT2w5eHJaN1NMZzlKZHMxSmRPMFI3NFdVQ1VoUVhkdlF4M3Y3V0Y5YXdRY2ZTUkFLVVVTTnhQZWV5WnUzWHpZMXZveUt1V000bEZ5cnMxSHhCa3U4ZENiJTJCZXFIOXRKMkdZUTA5S2taejJqUG1yNGY4NG5tWUlQUGhoNmolMkZIWWExazQydVBMcjlEdyUzRCUzRCUzQyUyRmRpYWdyYW0lM0UlM0MlMkZteGZpbGUlM0UXJ+6nAAAC4ElEQVRoQ+2aPUscQRjHn21SGzTEKuIRm0gavTo59Yp8ABXSGIsIor0gnJ4vgYC9Ipgi0UL08gEOvJxnarVQtFEUrZQYYm2z4b/6hMmyezuzs3u7A051x+3Mzm+f1//cWrZt20REZ1c39G17lyzLwlcjxouWJmp/3kw9r186+7UAkyss0c7RGbU9e2oEBG/y4tcf5+P0YJ5m378jq3pwYvdOL9OXsX4aynUbB7Na26P50g+qzo2SVVwv27MbW3S3+dkoENE6+ZkVGu7N3sN8re7SyeKEkTDYdMf4QrphEA+yMZx6GGxwKNdFUwP5QI9JPcyTwUkHAtZBcnrbmfGFSgSGU2ngo36IA/E6ZNqpgT5P10sEZr5UcdJo2AErebmekTD8ENxQjzBh3YPncbWWWccvvhA37gyXiGVkIPgazmb8HdkMWc2r9hgD09DUDHf4uPSdCv19dWuBilW4RWlY0QSEGANbxZFIYVTgtdzMq14YB8MuBSEXdiAGou7QlSzjdqmwINxrJQrDsaHSW/kBJ24ZbCwq66QCRpSpXpXcuAQguo47GRgNI7ream0/UEDVSxoqEtlrHaVsFpS9dDeDuoUHIlvx3fuJFCYINuh3sQjL9GKJwCBRyIy1nX3nRNUtviCVZU5oYrcMXA830Rl+MrnhlokCRrRUZWbE10pGWIbbH6jLeufgDYGRjZmfx+f/xQxbxEsix56adeICc92Sop5ENgYmTFpmVar8LwA3m29eZSJVlXBHrC1zrhyJZURXSLIP04JBMcOBhahljINJq0RWtozuAbdY7KKWyEowaZfISjBpl8jKMDzBT/cblwDEJwAo/D3NGc1oGLfrGQ8jup6MYNLt11Tmx941q2xG99pHGN0nGNf8f5bht5pkhVBcGwq7Loo8ekfnrSa8b1ZcL9PcZkXqJCTsTeOYx6UCYq72aeweBjfaPjyl8+vfdHlzG8d9Y1kTW//Qk6VMa4uz/l/tjAf+44PQ6wAAAABJRU5ErkJggg==",
  smartphone: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXElEQVR4nO2bQUtUURiGnxl1tKwcUMiojQhhCyldmz+hTX+kRbQKivYhWDvBf+AmCGsVFRZtxF3kIoqCihaZDFRqTovv3GAK0XvOmfsafQ9cZgbmfO973vvN3M35auRlHLgAHM9ct2ATWANed6l+NGeAZaBd0XUfOJ3DeC1DjVngHjAEfAZWgU+Y0ZzUgFFgGhgBNoBLwNPMOqVoAu+wzd4EGhVo9gO3guZbLHgZd4KRBYH2YtCeE2j/pmj1CYH2ZNB+L9AG4Ggw8APoEej3AdvBQ39skd4EA8XvfRu4mFAnhR1sD33YjaiUk1T32NvvGo7dREoHbIXXHWAloU4KM9jPb2u/L3aDJpb+hkI80AoejsUWqOfz8m/iAagNqPEA1AbUeABqA2o8ALUBNR6A2oAaD0BtQI0HoDagxgNQG1DjAagNqPEA1AbUeABqA2o8ALUBNR6A2oAaD0BtQI0HoDagxgNQG1DjAagNqPEA1AbUeABqA2o8ALUBNf99AClnhQuOAHcz1ImhigmVPTlMp8VHYjeR0gHF+fxvwLWEOincxrrge2yBlKmxJvAF+Brel+EUnWf828Ar7Oh9GVrAIDan2Cq5NpkGZvwnMFBi3Sh2x/5s4/mS+oPAbtCP7uTUgYl14CxwHnhxwHWbwGM6Bx/bJdYXTGEd/JLynZONq5j5R1T7SK0DT4L2lQp1/6IXeB6MPMDG53JMo+5FDTgHPAyaz0icWMthdgxYwloS7E+xm6OzJ8LnVeAy8CazThQN4Abwke4/8z8A17FRuWRyt2udzruUm6K7dnMV/AUxANH3cWxJTQAAAABJRU5ErkJggg==",
  server: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA4klEQVR42u3YsQqCUBxG8R6ohoaiWnpgh6agoQh6oBDKiJb6C7YIEdKFuvk78E2CeM8gegYDAHjPIraNlbH7j+8S28fmqQ4/iV0zOHh79TOPUwhYZ3j451YpBJwyFlCmENC+6bevf3o/Aggg4L8EdBVEAAEEdCOH7/9XO6YQUGQsoEghYBirMjx8/Vc4SvlHuMtERNU861TFAJCKZezQvFl71wRnsVufm+Cm703wrAkKIgQQQIAiRAABmqAmqAlqgpogAE1QE9QENUFNUBAhgAACFCECCNAENUFNUBPUBAHkygOtviHWnQRrBwAAAABJRU5ErkJggg==",
  database: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABQ5JREFUeJzt2uurVFUYx/HPeCuP0kklQ820ThbZ/WIhFkTUHxBBdEEpSaTohb3pQlAhERFRBApdsYLoZvUiLxFURPpCopumSZaeTMsyr6XHkx7txZrd7Dkze87ZM3vmnLH5woLNzF5rPev+/J61afH/JtegeoZiPMZhDE7CCAzP/38Y/2A/9mAX/kBPvQ3LugNG4CLMwHk4Fx2YiGEpyzqC7fgJ32M9vsBaobMGBTmcjwfxCQ7hWJ3TIXyM+zE9iwZUw3jMxRxhlJPoQacwituxA7uxD13C1CcshZFox1hMwCScianCEkpiPV7FK9iZvinpOAMvCFOw98gcxddYhNm4UFgStTIiX9YcLMY3Zeo+hm48hykZ1FlCGx5X2vAuvItbcUo9Kk5gPG7De0qXXTcWCjMqE6YL0yxeyUbcjZOzqqQGxuAe/KDYxrU4p9bCZ2JvrNCtuEXlNTlQDBVmxS8K9u4STqSq6BDO5KiwJRhVs5n1Z7SwKUZ271TFvpDDZ7FCFmqc05QFOTymYP9HUtp/dSzzsrSZBwk5rFBox5VpMr8Yyzgzc9MaxyyFdixOk3FLLGNb9nY1jFEK7fix3AtDEjLGRciEjI1qJBNjz2WFVVIH7Io935mZOY0nbnsqN/l9halzGNdkZ1PDuFZQlFE73i73Un+WwDAsxw1ZWldnbhROr7jDdjRNAUuVFxxLcGo2NtaFCYqdoHh6M01B8Q6Yr1gE/Y2ncHpWVmfAFDyNA4rjBnNl0AFwmVIZ2iMsjdkGRhSNESTySmF6x237Ehfn38ukAwh7wXxBEPWeXofxOR7BdULML2vacT0exSrFG1yUOoWdP772K3ZAmjjdETwvRF5uwl0KXuIwXJVPEZuxDpvyz9vxm3DE7hViCVFsb4TgcLULgdMoItSBabhACMYksUoIhrwjo3jhGqUzoBxn4QGsVn5E6pWOCI2+TwibVSLKs6rcn0kiZysm55/bhNHqi3ZhBlyRT9Nlt1FuVYgKrxEas78f+UbiYP65U5lZlLQEDsaeLxVGuC/2CZvi8thvo/OVTsZpCvcC7UIg9IT8e91K7wW2CcGNLcLJUw2Xx54PpMn4qcLU+VBzyuEhQhwgHhPoN70doSc0Vyfk8KSMHKEova4+x1vWtOMNGXqCu2PPv+J26a+5GsFwwfPboTgeWHMHnI1vFffmZiwQNrWBZhzuVRzEibzBDhl0AJyIh4XjMF5JNz7AHYqDD/VmkjDay/I2xG06iIcUTpjMXGHCUbZIaUdEaQNewjwhHp9FOK1N8Cvm4WXhprhc3V14VulAVOyApJ19qaCpk94ZK+wFsxVERxLb1OYKT+qj/K/wWj7tKfN/NIhv4eY+yvqPpBlQjmnCGlwhOCz1doP/EpytBUIH9UVVM2CNMO0qvVOOoYILHLnC0QcSk6W/rOwSPMHeH0hskO7LkWgQVysWa8hWC1QiJ7jAaVzh6FquFvrUAklsVJg6s2o0YiCJ33B9lyZjSwso3nhaWkBLC7S0QEsLaGmBlhaIaGmBGE2tBbLYzTfhmXwajFqgIkkdEL9dGan/WqBHuA1a1+v3gdQCEWVvjJI64OfYc3/vBSoR+RO7aywnLfF7gc40GeNfVx0vWiDVF6M54Zv840ULrKymkKn4M1ZIs2qB3wX/pSpmaH4tcEmtBTe7FsiEZtYCmdKMWqAi1e7szaQF6s5g1wIVyfpsbzot0CjnZqC0QIsWffAvCMEDw7ldJ8MAAAAASUVORK5CYII=",
  person: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR42u2ZzUpbURCAbzaaRjF0X6suFF1I8AGkuBbFXdV258Kgbiw2/ryGlWTh1oo+gW1BSh9AgtBK3Er6AFZMIjbthE5AhkmT+3PCzGUOfBv1zjnz3Xvm/Oh53W0jwC7wGSgDD0gZf7YDDHkxbMPACfAb+NOGxt8cAy/jkvxb4K6DxCm/gCXtyb8PkDjlneY3zyV0AawCo0APMgZkgWKLZxY1znn62d8DK22eS6CcCjMdBjUJOGWSn/bx/CtGwkctyY8w1X4lQJwsszqoWCL3mDkfpCWYmpDTIOALGfRqiFhrJNaZBgE/yaBHQ8QaJ7FuNAh4IIPuCRGrl8SqmQAFrUwGPRYi1oTGKUCLYDZErA2NRXCXDLqIS1qQZfBS4zI4zGyEgiyF6yTGo6Yj8gkZfAW3t522GaBKYhxpOgsMMYehCn4JiTaf/TqT/C3wQtuJ8E2Lo20Rd3jjuMz1YrXfYOZ8k9da7wS2IrgQ2dR+K7SM53m/id9qfvO0Nar3sdfZpegjFrxBL4atURy3gU+4q6shN7jJyXkxuA2eAgrANSYXtgY0YpSAPJCRnPgz4DCChP9HHeUmJSb/zXHyT/kqTcJhF5Nvkpc05+ngvgOzQCqC+H3AHHDFTAcRNaHAJD/goJ80I+FAgoBrMqhZh33Nk76uJAigS13KYV/9pK+qBAF0/setPxNgAkxAuAH5HXDU8UyACTAB3d0I9TkUIHIjVCKDmnMoYIH87ocEAXlmf552IOA5I3tfgoAMHk2phHnmkw0ioB/ffIk5Dk9KuRMo+LjI8CugFR8k3Qgl8ZqqWwLOvX//UfKkSSgw0yFKAXV88+KSpzXhAOtANQIBVaz2+5LmvMvDi7iNjgkwASbABJgAE2ACTIAJMAEmIBIBfjEBJsAEuGt/Af99DsfoQhFtAAAAAElFTkSuQmCC",
  worker: "data:image/png;base64,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",
  cloud: "data:image/png;base64,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",
  notebook: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAASZJREFUeJzt2jFuwjAAheE/ERvM7RkYOAQVHKkSEurQcyBRbkHhWoFMLXRIsmQAbDV5CXmf5AER4+cnZzJgZmZmZlY3AXZADlx7OnJgC4xjCvjqwAb+a2xiCjiXk6cxkztiRrGHLGZy1V7f3dzHKPCH+iR55KG06RRdF3ICKg81KxR0Ugd/AlyAOoCaC1AHUHMB6gBqLkAdQM0FqAOouQB1ADUXoA6g5gLUAdRcgDqAmgtQB1BzAeoAai5AHUDNBagDqMXcDfbtlvgmn4CAZ7t+Kxxl8Ccg4cne6VApcFKHEMoADhSn4L2lRe/9pa0N63KtPcCi/PADfAAvDS+uLOAV+AR+gQswr76oGhnSWNXbWQJHivdCHa6pkQHfwFt982ZmZmY2NH+sVgLs3hHMRgAAAABJRU5ErkJggg==",
  desktop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADLElEQVR4nO2azWtTWRiHn/dcOy3VOop15bejQ03T9gp+bBQUhBkEd26dce8sFGfrx1JcCLpwp+AfoHsRFUHcqQ02RqTIOFAUVKii4uTjvLNIbGNzS8Ntb16l59kkuW9y3uf+cj8OyYFAILCYkYRtbns+95eiR0BWd9woE/Q9yI2PX8rnxsfH/2uuLJn51vrOczE5mx8VARju6/5pOXCyudISQOObB/gX0bsd8csalZ1AToU/mCuAqcNe9O7ok9LR7O2yJ87nzgJngP6ZNddxm++MEIC1gDUhAGsBa0IA1gLWhACsBawJAVgLWBMCsBawJgRgLWBNCMBawJoQgLWANSEAawFrQgDWAtaEAKwFrAkBWAtYEwKwFrAm6d/hXlBQ+SUeHPyz80pZoCOzVRICYGXjcQ+ie7IR+n4Ip0DLFtHXKGsVrruankz4zIKhkW4CWSo1xjLt4ziOyPGkWmsASg1ARD8+LpVeZiU1MjLwq6tGqyTyEzV1mwvFYmbLceJ87v1sNbNTQFWWSeQntMIrEd9r5ZF0F/CggCyN43hFhr1fVCuVvRLp+u5efzvLXlIp92l90ZvOrCUEoAVgE8phquXDWUkBuMZKvPJnB5Qz66PTK/4KLQ4zN3inp4C3mdnY8cmrtFzUE1dD7hoYWFXucr/jdeFXioqcpjHXUOVmfRO/TdVVTyx4T+cm1VVuFQrPJ1p0FrzZHMT53D/ABkSvfV2H2LSOj9Gxpx11WvQToRCAtYA1iz6AeV9wdm/ZsvxLd9ffIrIfWNdGxzVoY/4hVAGmXtdpY/qtbxB3P6r68w9LpVcptJt05sHw8PDayFcfaDs7ng2TTvyBR0+ePUw7QNLvAW3jfO3S9M7LPeAl4lumm98iO1B6Zi/r/Tkbq+sHPQis8CpXgZiEaW47pD4C9m3c2DO5rPcD0AVyeXSseCztWGkYGRw8IaIXAJzK1kfF4niacVJfBN/19WwFugBEuZN2nLQ4pnvWxA+lHSf1KRD5KELqR50KV+KhbYfSjpUGVfJfnzt1Udpx5nUNaNL5GZUO/4Ca6pRvIXUAAmVt65aVPer8Z2uHQCDwY/I/B9zTVfqFBW0AAAAASUVORK5CYII=",
  webpage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB10lEQVR42u2bzStEURjGT5LyuVBWqCGUxA5lIxklS1uy5G8g8S+YheXspKbUTGxmKI0lxUIJZWNhEpajydeM59Q7dZq4Za7NO+d569csns5p3t/MOefeutcYFovl1AhIgwIo1hi2pyToCRJgmy/VOIkgAQUPBLwGCSh6IKD0FwEP4FDWjkbsd8+FEWAnmAZ9SomCozACkjKR1uoHqf8S0AY2QRbEwZAzrhEsgn2wByadrB5MgB1wAJZAq0YBG+AFfMlpkXYamQdX4AO8g3vQLpkdfwzeJH8Es6BOm4Csk9vPOzAq2Tr4dMbZfE6ycZHiZmugWZuAeMUV4jnolGwZPDnj82BAsmGRVc4KslwatAmwaz4jzVyABWdcF9gC1+AGrDpZC1gBl+AWbINujXuAkTU/5vzypmIjtJJ6f1jfdiOMgEHQpPUU8PIYtH/pmBx/GolJD1UL8P5e4BmcghOlnEkPVQvIyFVdRClTcj/DTZACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACKIACfhFgHzWPykQamTEhH5fPyQQppRyZkC9MePeYnPcvTSU9ELAbJMC+VJgQS7XWeF6a7zAsFqtc316rowTtqiEUAAAAAElFTkSuQmCC",
  pod: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFNklEQVR42u2beWxUVRTGL6W0gEBUoOxJQUSIkQCBRCoi/CFRKbIIBMLigmEHBQVEIxJCwChLTIzhD2IQ+R81QeoSNQHCEpYEGwQjJUgLZQ8oFTqt4/flfS9zHRiW12Hmzcy9yS+Q6cx755537znnvfM9Y9xww400jgLwkCjItckXggFgseivz+JHo2ycfBfwITgGrgn+fzXonOA3eaBxJk+aE2gPFoF94ByoBVFRq8/4t7dAO/3mViuiSRgneLul2hG8Ar4GFeAG+Ff/HgG/yQH+ZxX67sugQ4JzNUrgoFCNIjAKbACHwD+aJDkMPgZjwTiwFvxqrQh+9yD4DIzUsTJmtARDwHLwC7isSUXASfCFVsQjWs7MAN3Ba+BLcErfjeq3P4MPdMyWYU9rfcEs8I32tL+/T4NtYAnolSDi87PHwVKwHZyxHHFW22Im6BO2tEnDu4ERuoKceD2oA+fBbi3xJ+/hmCVgPdgLLup49To2V1CpzlmYzonng9bgKbDOMpR7/C9wHGwCwwJGbl7l58BmBca/dWye44KcOlA25Kd68k20lN+XcVEZF5Gh2xQAk7FnW4HR4FsdO6JzReXk98BjqUyPzNHzlbNrtNSjujL7wSSlvvwkr7ZOYKoySr3OWScbuFXm3e9s8QB4FZSBKqUqGnFd+Xwh6Kmrfj9ydJ6OzZX3tuqHG1barFLwZP3QPJknbqEAtwWUa3/7y/0o+AgMVqWXiuLEryqZFtfIhogVe8pla6kuWoOqO+bqVWAXuGoFOe69jWCCcng6qjKesweYCD5XLPKDJG3dCVaC4oYs+TGg2qrQmJu3gjeUj5uGIA3Thn7gTfBVnL2sP54NGo/agDlWgKvSkisJaUVGmwYpJZ+2AuXEoDGhLZhrRdvvQdcMKMVp449WFTlZcaxBDoiovC3OAAcUqw7xHTAhGSsgkx0wHjTLZQeMDnrzlC0OeCnoTZNbAVnigLFB6xWXBbLEAVNyvQ54HTyYyw6YAR7OZQfM1mMz5wDnAOcA5wDnAOcA5wDnAOcA5wDngHt3AB+L/2C8nnzYB238ycSatoEdEN8YYbOBPXk2H1qFcOK0iT3K9eb/jZFZQe8G/dbYGRNrNbHtxPYT21B9TThaY3zk7bfGKKM5a9nLbtaooE+E/OYoG4xsNF61vHrCeA1Jtp3YoEyHiJHnpDCCeoRNsslfrVfADrBCW6JBilOuhBeMp/+hlM1uj1PhyX7hEJPa9jj1g0ON1wf8Xfvd7wrTxs2yuXmylxqfr1GqUmliAgmKFNijp2ghVQKJJZq4LZCoVPSfbAJ2gu52FCk7UJYSL5GhfIUyFspZki2RoY6YCpXD5maJzB5F+7ap2n8Futrvgj/MzSKpMgXQZGQLPtCkmvQ7HbvOxERSXAXvKA6lXEPsy+RKFAfOW1eGhlZoLz5vgnVm+JvhxpO7+DI5f6VRL0hpTtpkcvGGsidfqmhcbWLCxgtanuvkqLsdT4NPjKdEs4WS1co+w3XOUClGaQxlMzPj8nFEtQSDJ2WwlMMmkso+YTzdX5kmG7HqD0pzpoPeJqSSeX/YYmkKnW2x9J/aFgxm3eU08iiYpuVeaU38ksraZeAZE7DDk67BiPyi8STvB6y0ScpVVjO4jVf5esT6e41+86nxJHptTAaPDkqNLKGPm9gLE7WqH46Z2AsT1/Wdrao52pssGXmqHxaofkj0yswe1fRFJgPeCLnTfUSiwYJmla58jTiqe46OJgvHrZzBu0i+KscXpBbqbq7Q5NjI6Rcn3XAjBOM/Ukn8Cls11R0AAAAASUVORK5CYII=",
  document: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAH8SURBVGje7Zm/SyNBFMc/k12JP8ATVLjr/FGJ+AcoCNan2EnigWAtYiVaqIWoYHGNlYVicXCFhWAngojYWenJXWEhCmqws7kcaNSxMI3KZt9kdxLCzTdFwszb2c+878tjhwWn/10qYLya+girZvmHloX6AeODrJMr8vYJtpnnMlpmRtARPo/8oEVKa0Me31igVRLqF5y9Y5yswY2X6ASeUHikUMxxUeweXi3I8MnoqgM0ml120Ghy/Aw3whcsa6rfbJCkD580OiwLdmrgD5McoEkwHFYLdgDgmEn2gQRpFmkvPYDmmCn2AI8hFmkrJUAdjXzhMxlWOAWqSJEKCrZRhKOk878UtfnvwH+TDYAkSXmwrRoQK94MTNPE85sRxXc6Sgdw9GFEMVv4krJb4ADKDiArwmZqjFfOcSt5LpQBrDJg+ISY4Ixu7uMCqDHrbgD5JiwgLbNkGZhh5V2HC5MiKzNNBnBiLwMVYkE/rcYW3LHJU1wAY3w13toZWxKACrHglivjRnQtOx9LLfCMt/bMQ3wAgpZarCqkBpbpFdSAYoJfdgC66BHFNZhnoEIs2Oacx9AoxbUtgDV7GSi7BQ7AATgAB+AA/JDZDv5GWl+FnRELAzRxaHmLIdOKqsgARfJpkBwrhPKCz1VBb80aaZO+9xJIkeEmttWcnOLVCybGe0qF0Rl6AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTI5VDExOjU5OjE2KzAxOjAwq3IToAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0yOVQxMTo1OToxNiswMTowMNovqxwAAAAASUVORK5CYII=",
  phone: "data:image/png;base64,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",
  folder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfxJREFUeJzt279rFEEYxvHPxROjxmBppYKNEAsLGwsLBWs70cI2bXrBVlQEEUv/C2ttBK0EbRIQAqKlREGMmESysdjdcyyCcLu37507X3iZ2ebleZ+dGfbHDJlMrxkk/TmcxpExc32uYia5gnXsNYgCj3GgY+2NuYgdzYpP41G38psxwEtcwgbu4vuYeVawVF1fxfM2BHZBffefNMyzlORaN/5a0ilDHKz62w1zreIe7uAM7uO20pBpYqeKEfXcfdhC8kN4q731ZBJR4AXOTcIAOIUPU1Dov+Ibzg5bKjrlI87jFk5MIH9TFrCMRTyg/REwCzxV1rw5F60kiB9VO99XA0b03oB0EVzADcwHaemKLRytLwb+PKgU+jMidpUvbbupAX2kSKfAV1zDZpCYrjiGZziu+h5SPwe8CRTVNe9Udadzvk9TYVRrXxa9fckGRAuIJhsQLSCabEC0gGiyAdECoskGRAuIJhuQ9Hv/MrQaICSKtaotUgO+RCgJYqNq9/IaEC0gmmxAtIBosgHRAqLJBkQLiCYbEC0gmmxAtIBosgHRAqLJBkQLiCYbEC0gmmyAcssY5Vb3vlDvhfw1xGvlkZmb+GS8IzOzxCKuV/1XlIemtsXv3+86tnChduUy3k+BqK5iTTnq/zo4OcBJHPZ/81M51fv0JyyT2Y/f3pw3gUxucUoAAAAASUVORK5CYII=",
};