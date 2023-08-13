export enum OptionCardId {
	DESIGN_CONCEPT = 'design-concept',
	DESIGN_PROTOTYPE = 'design-prototype',
	DESIGN_DELIVERY = 'design-delivery',
	BUILD_WEBSITES = 'build-websites',
	BUILD_WEB_APP = 'build-web-app',
	BUILD_NATIVE_APP = 'build-native-app',
	HOST_START_UP = 'host-start-up',
	HOST_SCALE_UP = 'host-scale-up',
	HOST_BESPOKE = 'host-bespoke',
}

export const getFormSubject = (buttonId: OptionCardId): string => {
	switch (buttonId) {
		case OptionCardId.DESIGN_CONCEPT:
			return 'Design Concept Enquiry';

		case OptionCardId.DESIGN_PROTOTYPE:
			return 'Design Prototype Enquiry';

		case OptionCardId.DESIGN_DELIVERY:
			return 'Design Delivery Enquiry';

		case OptionCardId.BUILD_WEBSITES:
			return `Website Building Enquiry`;

		case OptionCardId.BUILD_WEB_APP:
			return `Web App Building Enquiry`;

		case OptionCardId.BUILD_NATIVE_APP:
			return `Native App Building Enquiry`;

		case OptionCardId.HOST_START_UP:
			return `Start Up Hosting Package`;

		case OptionCardId.HOST_SCALE_UP:
			return `Scale Up Hosting Package`;

		case OptionCardId.HOST_BESPOKE:
			return `Bespoke Hosting`;

		default:
			throw new Error('Unknown OptionCardId');
	}
};
