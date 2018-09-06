/**
 * Describes the current state of the change detector.
 */
export declare const enum ChangeDetectorState {
    /**
     * `NeverChecked` means that the change detector has not been checked yet, and
     * initialization methods should be called during detection.
     */
    NeverChecked = 0,
    /**
     * `CheckedBefore` means that the change detector has successfully completed at least
     * one detection previously.
     */
    CheckedBefore = 1,
    /**
     * `Errored` means that the change detector encountered an error checking a binding
     * or calling a directive lifecycle method and is now in an inconsistent state. Change
     * detectors in this state will no longer detect changes.
     */
    Errored = 2,
}
/**
 * Describes within the change detector which strategy will be used the next time change
 * detection is triggered.
 */
export declare const enum ChangeDetectionStrategy {
    /**
     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
     * will become `Checked`.
     */
    /**
     * `Checked` means that the change detector should be skipped until its mode changes to
     * `CheckOnce`.
     */
    /**
     * `CheckAlways` means that after calling detectChanges the mode of the change detector
     * will remain `CheckAlways`.
     */
    /**
     * `Detached` means that the change detector sub tree is not a part of the main tree and
     * should be skipped.
     */
    /**
     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
     */
    OnPush = 0,
    /**
     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
     */
    Default = 1,
}
/**
 * List of possible {@link ChangeDetectionStrategy} values.
 */
export declare var CHANGE_DETECTION_STRATEGY_VALUES: ChangeDetectionStrategy[];
/**
 * List of possible {@link ChangeDetectorState} values.
 */
export declare var CHANGE_DETECTOR_STATE_VALUES: ChangeDetectorState[];
export declare function isDefaultChangeDetectionStrategy(changeDetectionStrategy: ChangeDetectionStrategy): boolean;
