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
	BEYOND_ADVERTISING = 'advertising',
	BEYOND_VIDEO_EDITING = 'video-editing',
	BEYOND_PHOTO_EDITING = 'photo-editing',
	SUBSCRIBE_QUARTER = 'subscribe-quarter',
	SUBSCRIBE_BIANNUAL = 'subscribe-biannual',
	SUBSCRIBE_ANNUAL = 'subscribe-annual',
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
			return `Start Up Hosting Package Enquiry`;

		case OptionCardId.HOST_SCALE_UP:
			return `Scale Up Hosting Package Enquiry`;

		case OptionCardId.HOST_BESPOKE:
			return `Bespoke Hosting Enquiry`;

		case OptionCardId.BEYOND_ADVERTISING:
			return `Advertising Enquiry`;

		case OptionCardId.BEYOND_VIDEO_EDITING:
			return `Video Editing Enquiry`;

		case OptionCardId.BEYOND_PHOTO_EDITING:
			return `Photo Editing Enquiry`;

		case OptionCardId.SUBSCRIBE_QUARTER:
			return `Quarterly Subscription Enquiry`;

		case OptionCardId.SUBSCRIBE_BIANNUAL:
			return `Biannual Subscription Enquiry`;

		case OptionCardId.SUBSCRIBE_ANNUAL:
			return `Annual Subscription Enquiry`;

		default:
			throw new Error('Unknown OptionCardId');
	}
};
