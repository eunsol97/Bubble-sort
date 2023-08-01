// JavaScript Document
function sortInputs() {
			// 입력값 유효성 검사
			let inputs = [];
			for (let i = 1; i <= 5; i++) {
				let input = document.getElementById("inout0" + i).value;
				if (isNaN(input)) {
					alert("입력값은 숫자여야 합니다.");
					return;
				}
				inputs.push(Number(input));
			}

			// 버블정렬
			for (let i = 0; i < inputs.length - 1; i++) {
				for (let j = 0; j < inputs.length - 1 - i; j++) {
					if (inputs[j] > inputs[j + 1]) {
						let temp = inputs[j];
						inputs[j] = inputs[j + 1];
						inputs[j + 1] = temp;
					}
				}
			}

			// 결과 출력
			let outputDiv = document.getElementById('result');
			outputDiv.innerHTML = '';
			for (let i = 0; i < inputs.length; i++) {
				outputDiv.innerHTML += inputs[i] + ' ';
			}
		}