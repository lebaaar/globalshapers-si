type Params = { delay?: number; threshold?: number };

export function inView(node: HTMLElement, { delay = 0, threshold = 0.12 }: Params = {}) {
	node.classList.add('anim');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('in');
				observer.disconnect();
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return { destroy: () => observer.disconnect() };
}
