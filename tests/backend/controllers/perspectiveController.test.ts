import { PerspectiveController } from '../../src/controllers/perspectiveController';

describe('PerspectiveController', () => {
    let controller: PerspectiveController;

    beforeEach(() => {
        controller = new PerspectiveController();
    });

    test('should return perspectives', async () => {
        const perspectives = await controller.getPerspectives();
        expect(perspectives).toBeDefined();
        expect(Array.isArray(perspectives)).toBe(true);
    });

    test('should create a perspective', async () => {
        const newPerspective = { title: 'New Perspective', description: 'Test description' };
        const createdPerspective = await controller.createPerspective(newPerspective);
        expect(createdPerspective).toHaveProperty('id');
        expect(createdPerspective.title).toBe(newPerspective.title);
    });

    test('should update a perspective', async () => {
        const updatedData = { title: 'Updated Perspective' };
        const updatedPerspective = await controller.updatePerspective(1, updatedData);
        expect(updatedPerspective.title).toBe(updatedData.title);
    });

    test('should delete a perspective', async () => {
        const deleteResponse = await controller.deletePerspective(1);
        expect(deleteResponse).toBeTruthy();
    });
});