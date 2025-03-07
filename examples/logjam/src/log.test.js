import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
    describe('development', () => {
        beforeEach(() => {
            // Just for these tests the environment would be DEV
            vi.stubEnv('MODE', 'development');
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should log to the console in DEV mode', () => {
            const logSpy = vi.spyOn(console, 'log');

            log('Hello World');

            expect(logSpy).toHaveBeenCalled();
            expect(logSpy).toHaveBeenCalledWith("Hello World");
        })
    });

    describe('production', () => {
        beforeEach(() => {
            // Just for these tests the environment would be DEV
            vi.stubEnv('MODE', 'production');
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should not call console.log in PROD mode', () => {
                const logSpy = vi.spyOn(console, 'log');
    
                log('Hello World');
    
                expect(logSpy).not.toHaveBeenCalled();
        });
    })
});
