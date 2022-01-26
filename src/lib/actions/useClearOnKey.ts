export default function clearOnKey(node: HTMLInputElement, key: string) {
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === key) {
			node.value = '';
		}
	}

	node.addEventListener('keydown', handleKeydown);
	return {
		destroy() {
			node.removeEventListener('keydown', handleKeydown);
		}
	};
}
